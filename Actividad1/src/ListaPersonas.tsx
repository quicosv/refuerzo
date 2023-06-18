import React, { useState } from "react";
import { FilaPersona } from "./FilaPersona";

// Definimos la interfaz para el objeto Persona
interface Persona {
	nombre: string;
	apellido: string;
}

export const ListaPersonas = () => {
	// Definimos el estado para la lista de personas
	const [personas, setPersonas] = useState<Persona[]>([]);
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");

	// Función que se ejecuta al enviar el formulario
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (nombre && apellido) {
			// Creamos un nuevo objeto Persona con los valores ingresados
			const nuevaPersona: Persona = { nombre, apellido };
			// Agregamos la nueva persona al estado personas
			setPersonas([...personas, nuevaPersona]);
			// Limpiamos los campos de nombre y apellido
			setNombre("");
			setApellido("");
		}
	};

	// Función para eliminar una persona de la lista
	const handleEliminar = (i: number) => {
		// Mostramos una ventana de confirmación al usuario
		const confirmacion = window.confirm(
			"¿Está seguro de que quiere borrar esta persona de la lista?"
		);
		if (confirmacion) {
			// Creamos una copia del estado personas
			const personasActualizadas = [...personas];
			// Eliminamos la persona en la posición i
			personasActualizadas.splice(i, 1);
			// Actualizamos el estado personas con la lista actualizada
			setPersonas(personasActualizadas);
		}
	};

	return (
		<article>
			<h1>Agregador de personas</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						placeholder="Nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="apellido">Apellido:</label>
					<input
						type="text"
						id="apellido"
						placeholder="Apellido"
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Agregar Persona</button>
			</form>
			<ol>
				{/* Renderizamos el componente FilaPersona para cada persona en el estado personas */}
				{personas.map((persona, i) => (
					<FilaPersona
						key={i}
						persona={persona}
						onEliminar={() => handleEliminar(i)}
					/>
				))}
			</ol>
		</article>
	);
};
