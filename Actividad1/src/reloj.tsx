import { useEffect, useState } from 'react';

export const Reloj = () => {
	const [hora, setHora] = useState(new Date()); // Estado para almacenar la hora actual

	useEffect(() => {
		// Establecer intervalo para actualizar la hora cada segundo
		const intervalId = setInterval(() => {
			setHora(new Date()); // Actualizar el estado con la hora actualizada
		}, 1000);

		return () => {
			clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
		};
	}, []);

	// Función para formatear un número añadiendo ceros a la izquierda si es necesario
	const formatTime = (time: number) => {
		return time.toString().padStart(2, '0');
	};

	const horas = formatTime(hora.getHours());
	const minutos = formatTime(hora.getMinutes());
	const segundos = formatTime(hora.getSeconds());

	return (
		<article>
			<h2>Relój</h2>
			<span>{horas}</span>:<span>{minutos}</span>:<span>{segundos}</span>
		</article>
	);
};
