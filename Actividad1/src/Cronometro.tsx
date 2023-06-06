import { useEffect, useState } from "react";

export const Cronometro = () => {
  const [decimas, setDecimas] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    if (corriendo) {
      intervalId = setInterval(() => {
        setDecimas((decimas) => (decimas + 1) % 10);

        if (decimas === 9) {
          setSegundos((segundos) => segundos + 1);
        }

        if (segundos === 59 && decimas === 9) {
          setMinutos((minutos) => minutos + 1);
        }
      }, 100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [corriendo, decimas, segundos]);

  const iniciarCronometro = () => {
    setCorriendo(true);
  };

  const pararCronometro = () => {
    setCorriendo(false);
  };

  const reiniciarCronometro = () => {
    setDecimas(0);
    setSegundos(0);
    setMinutos(0);
    setCorriendo(false);
  };

  return (
    <div>
      <span>{decimas}</span>
      <span aria-live="polite">{`${segundos} segundo${segundos !== 1 ? "s" : ""}`}</span>
      <span aria-live="polite">{`${minutos} minuto${minutos !== 1 ? "s" : ""}`}</span>
      <br />
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pararCronometro}>Parar</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
};
