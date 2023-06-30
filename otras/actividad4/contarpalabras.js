let caracteresAnteriores = 0; // Variable para almacenar el número de caracteres anterior

/**
 * Función para contar las palabras y caracteres en el texto de entrada
 */
function contarPalabrasYCaracteres() {
	const textoEntrada = document.getElementById("textoEntrada").value;
	const palabras = textoEntrada.split(/\s+/).filter(function (palabra) {
		return palabra.length > 0;
	});

	const contadorPalabras = palabras.length;
	const contadorCaracteres = textoEntrada.length;

	document.getElementById("contadorPalabras").innerText =
		contadorPalabras + " palabra" + (contadorPalabras !== 1 ? "s" : "");
	document.getElementById("contadorCaracteres").innerText =
		contadorCaracteres + " caracter" + (contadorCaracteres !== 1 ? "es" : "");

	verificarPitidos(contadorCaracteres);
}

/**
 * Función para verificar si se supera el límite de caracteres y emitir pitidos en consecuencia
 * @param {number} numCaracteres - Número actual de caracteres en el texto de entrada
 */
function verificarPitidos(numCaracteres) {
	const maxCaracteres = Math.max(
		0,
		document.getElementById("maxCaracteres").value
	);

	if (numCaracteres > maxCaracteres) {
		emitirPitido();
	}
}

/**
 * Función para verificar y limitar el número máximo de caracteres en el texto de entrada
 */
function verificarLimiteDeCaracteres() {
	const maxCaracteres = Math.max(
		0,
		document.getElementById("maxCaracteres").value
	);
	const textoEntrada = document.getElementById("textoEntrada");

	if (textoEntrada.value.length > maxCaracteres) {
		textoEntrada.value = textoEntrada.value.substring(0, maxCaracteres);
	}

	contarPalabrasYCaracteres();
}

/**
 * Función para emitir un pitido utilizando el AudioContext
 */
function emitirPitido() {
	const audioContext = new (window.AudioContext || window.webkitAudioContext)();
	const oscillator = audioContext.createOscillator();
	const gainNode = audioContext.createGain();

	oscillator.connect(gainNode);
	gainNode.connect(audioContext.destination);

	oscillator.type = "square";
	oscillator.frequency.value = 3000;
	gainNode.gain.value = 0.1;

	oscillator.start(audioContext.currentTime);
	oscillator.stop(audioContext.currentTime + 0.1);
}

/**
 * Función para emitir pitidos cuando se supera el número máximo de caracteres
 */
function emitirPitidos() {
	const maxCaracteres = Math.max(
		0,
		document.getElementById("maxCaracteres").value
	);
	const textoEntrada = document.getElementById("textoEntrada").value;

	if (textoEntrada.length > maxCaracteres) {
		const excesoCaracteres = textoEntrada.length - maxCaracteres;
		for (let i = 0; i < excesoCaracteres; i++) {
			emitirPitido();
		}
	} else if (textoEntrada.length < caracteresAnteriores) {
		const diferenciaCaracteres = caracteresAnteriores - textoEntrada.length;
		for (let i = 0; i < diferenciaCaracteres; i++) {
			emitirPitido();
		}
	}

	caracteresAnteriores = textoEntrada.length;
}
