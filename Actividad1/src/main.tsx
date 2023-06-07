import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parejas } from "./Parejas";
import { Cronometro } from "./Cronometro";
import { Reloj } from "./reloj";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<header>
			<h1>Actividades Extra</h1>
		</header>
		<main>
			<Cronometro />
			<Reloj />
			<Parejas />
		</main>
	</React.StrictMode>
);
