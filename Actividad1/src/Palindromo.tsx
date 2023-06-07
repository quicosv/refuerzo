import { useState } from "react";

export const Palindromo = () => {
	const [palabra, setPalabra] = useState("");
	const [esPalindromo, setEsPalindromo] = useState(false);
	const [mostrarResultado, setMostrarResultado] = useState(false);

	const verificarPalindromo = () => {
		if (palabra.trim() === "") {
			setMostrarResultado(false);
			return;
		}

		const textoFormateado = palabra.replace(/\s/g, "").toLowerCase();
		const textoInvertido = textoFormateado.split("").reverse().join("");

		if (textoFormateado === textoInvertido) {
			setEsPalindromo(true);
		} else {
			setEsPalindromo(false);
		}

		setMostrarResultado(true);
	};

	return (
		<article>
			<h2>Palíndromo</h2>
			<input
				type="text"
				value={palabra}
				onChange={(e) => setPalabra(e.target.value)}
			/>
			<button onClick={verificarPalindromo}>Verificar</button>
			{mostrarResultado && (
				<p>La palabra {esPalindromo ? "es" : "no es"} un palíndromo.</p>
			)}
		</article>
	);
};
