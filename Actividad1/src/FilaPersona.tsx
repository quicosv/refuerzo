import React from "react";

// Definimos la interfaz para las propiedades del componente FilaPersona
interface FilaPersonaProps {
	persona: {
		nombre: string;
		apellido: string;
	};
	onEliminar: () => void;
}

// Componente FilaPersona que representa una fila de la lista de personas
export const FilaPersona: React.FC<FilaPersonaProps> = ({
	persona,
	onEliminar,
}) => {
	return (
		<li>
			{/* Mostramos el nombre y apellido de la persona */}
			{persona.nombre} {persona.apellido}
			{/* Botón "Eliminar" que ejecuta la función onEliminar al hacer clic */}
			<button onClick={onEliminar}>Eliminar</button>
		</li>
	);
};
