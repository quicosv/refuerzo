import React, { useState, useEffect } from "react";

export const ContadorPalabras = () => {
	const [textoEntrada, setTextoEntrada] = useState("");
	const [contadorPalabras, setContadorPalabras] = useState(0);
	const [contadorCaracteres, setContadorCaracteres] = useState(0);
	const [maxCaracteres, setMaxCaracteres] = useState(0);

	useEffect(() => {
		// Actualiza el contador de caracteres cada vez que el texto de entrada cambia
		const caracteres = textoEntrada.length;
		setContadorCaracteres(caracteres);

		// Comprueba si se excede el número máximo de caracteres y emite un pitido si es así
		if (caracteres > maxCaracteres) {
			emitirPitido();
		}
	}, [textoEntrada, maxCaracteres]);

	const contarPalabrasYCaracteres = () => {
		// Actualiza el contador de caracteres cada vez que el texto de entrada cambia
		const caracteres = textoEntrada.length;
		setContadorCaracteres(caracteres);

		// Comprueba si se ha alcanzado el número máximo de caracteres y emite un pitido si es así
		if (caracteres === maxCaracteres + 1) {
			emitirPitido();
		}

		// Cuenta las palabras en el texto de entrada
		const palabras = textoEntrada
			.trim()
			.split(/\s+/)
			.filter((palabra) => palabra.length > 0);
		setContadorPalabras(palabras.length);
	};

	const emitirPitido = () => {
		// Crea un contexto de audio
		const audioContext = new AudioContext();

		// Crea un oscilador
		const oscillator = audioContext.createOscillator();

		// Crea un nodo de ganancia
		const gainNode = audioContext.createGain();

		// Conecta el oscilador al nodo de ganancia
		oscillator.connect(gainNode);

		// Conecta el nodo de ganancia al destino de audio
		gainNode.connect(audioContext.destination);

		// Configura la forma de onda del oscilador como una onda cuadrada
		oscillator.type = "square";

		// Establece la frecuencia del oscilador en 3000 Hz
		oscillator.frequency.value = 3000;

		// Establece el valor de ganancia del nodo de ganancia en 0.1
		gainNode.gain.value = 0.1;

		// Inicia el oscilador en el tiempo actual del contexto de audio
		oscillator.start(audioContext.currentTime);

		// Detiene el oscilador después de 0.1 segundos
		oscillator.stop(audioContext.currentTime + 0.1);
	};

	const handleTextoEntradaChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		// Actualiza el texto de entrada cuando el contenido del textarea cambia
		setTextoEntrada(event.target.value);
	};

	const handleMaxCaracteresChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		// Actualiza el número máximo de caracteres cuando el valor del input cambia
		setMaxCaracteres(Number(event.target.value));
	};

	return (
		<article>
			<h1>Contador de palabras</h1>
			<textarea
				id="textoEntrada"
				rows={5}
				cols={50}
				value={textoEntrada}
				onChange={handleTextoEntradaChange}
				onInput={contarPalabrasYCaracteres}
			></textarea>
			<p id="contadorPalabras">
				{textoEntrada ? contadorPalabras : 0} palabra
				{contadorPalabras !== 1 ? "s" : ""}
			</p>
			<p id="contadorCaracteres">{contadorCaracteres} caracteres</p>
			<input
				type="number"
				id="maxCaracteres"
				value={maxCaracteres}
				onChange={handleMaxCaracteresChange}
				min={0}
				placeholder="Número máximo de caracteres"
			/>
		</article>
	);
};
