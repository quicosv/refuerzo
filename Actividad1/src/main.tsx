import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parejas } from "./Parejas";
import { Cronometro } from "./Cronometro";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Parejas />
		<Cronometro />
	</React.StrictMode>
);
