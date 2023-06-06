import { ChangeEvent, FormEvent, useState } from "react";
import { IMiembro } from "./interfaces/miembro.interface";
import { IGente } from "./interfaces/gente.interface";

export const Parejas = () => {
	const [miembro1, setMiembro1] = useState<IMiembro>();
	const [miembro2, setMiembro2] = useState<IMiembro>();
	const grupo1: IGente = [];


	const onChangeMiembro1 = (e: ChangeEvent<HTMLInputElement>) => {
		setMiembro1(e.target.value);
	  };

	  const onChangeMiembro2 = (e: ChangeEvent<HTMLInputElement>) => {
		setMiembro2(e.target.value);
	  };

	  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	  };
	
	return (
		<>
			<h1>Actividad 1 de refuerzo</h1>
			<hr />
			<form onSubmit={onSubmit}>

			<label htmlFor="miembro1">Miembro grupo 1:</label>
			<input id="miembro1" type="text" onChange={onChangeMiembro1} />
			<label htmlFor="miembro2">Miembro grupo 2:</label>
			<input id="miembro2" type="text" onChange={onChangeMiembro1} />
			<button
          className="btn btn-success"
          type="submit"
          disabled={miembro1.trim() === "" && miembro2.trim() === ""}
        >
          Añadir
        </button>

			</form>
		</>
	);
};
