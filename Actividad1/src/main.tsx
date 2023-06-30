import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parejas } from "./Parejas";
import { Cronometro } from "./Cronometro";
import { Reloj } from "./Reloj";
import { Palindromo } from "./Palindromo";
import { ContadorPalabras } from "./ContarPalabras";
import { ListaPersonas } from "./ListaPersonas";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<header>
			<h1>Actividades Extra</h1>
		</header>
		<main>
			<ListaPersonas/>
			<ContadorPalabras/>
			<Cronometro />
			<Reloj />
			<Palindromo/>
			<Parejas />
		</main>
	</React.StrictMode>
);
