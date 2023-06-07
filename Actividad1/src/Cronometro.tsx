import { useEffect, useState } from "react";

export const Cronometro = () => {
  const [decimas, setDecimas] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    intervalId = corriendo
      ? setInterval(() => {
        //         setDecimas es una función que se utiliza para actualizar el estado de la variable decimas.
        // (prevDecimas) es un parámetro de la función de flecha que representa el valor anterior de decimas.
        // (prevDecimas + 1) incrementa el valor de prevDecimas en 1 unidad.
        // % 10 realiza la operación de módulo 10, lo cual asegura que el valor resultante se encuentre en el rango de 0 a 9(cíclico entre 0 y 9).Por ejemplo, si prevDecimas es 9 y se le suma 1, el resultado sería 10, pero al aplicar el módulo 10, obtenemos 0, reiniciando el ciclo de las décimas.
        // En resumen, esta línea incrementa las décimas en 1 y las mantiene dentro del rango válido de 0 a 9.
        setDecimas((prevDecimas) => (prevDecimas + 1) % 10);

        decimas === 9 && setSegundos((prevSegundos) => (prevSegundos + 1) % 60);

        segundos === 59 && decimas === 9 && setMinutos((prevMinutos) => (prevMinutos + 1) % 60);
      }, 100)
      : null;

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [corriendo, decimas, segundos, minutos]);


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
    <article>
      <h2>Cronómetro</h2>
      <span>{formatTime(minutos)}</span>:
      <span>{formatTime(segundos)}</span>:
      <span>{formatTime(decimas)}</span>
      <br />
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pararCronometro}>Parar</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </article>
  );
};
