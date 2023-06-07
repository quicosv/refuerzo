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
        setDecimas((prevDecimas) => (prevDecimas + 1) % 10);

        if (decimas === 9) {
          setSegundos((prevSegundos) => (prevSegundos + 1) % 60);
        }

        if (segundos === 59 && decimas === 9) {
          setMinutos((prevMinutos) => (prevMinutos + 1) % 60);
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

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div>
      <span>{formatTime(minutos)}</span>:
      <span>{formatTime(segundos)}</span>:
      <span>{formatTime(decimas)}</span>
      <br />
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pararCronometro}>Parar</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
};
