import { ChangeEvent, FormEvent, useState } from "react";
import { IMiembro } from "./interfaces/miembro.interface";

export const Parejas = () => {
	const [miembro1, setMiembro1] = useState<IMiembro>({ miembro: "" });
	const [miembro2, setMiembro2] = useState<IMiembro>({ miembro: "" });
	const [emparejaos, setEmparejaos] = useState<boolean>(false);
	// Nos declaramos los arrays con ambos grupos
	const grupo1: IMiembro[] = [];
	const grupo2: IMiembro[] = [];
	// Aquí creamos array de números donde almacenamos índices aleatorios para luego mostrar las parejas
	const posicionesDeParejas: number[] = [];

	const onChangeMiembro1 = (e: ChangeEvent<HTMLInputElement>) => {
		setMiembro1({ miembro: e.target.value });
	};

	const onChangeMiembro2 = (e: ChangeEvent<HTMLInputElement>) => {
		setMiembro2({ miembro: e.target.value });
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		grupo1.push(miembro1);
		grupo2.push(miembro2);
	};

	const generadorNumerosAleatoriosUnicos = (
		cuantosDistintos: number,
		min: number,
		max: number
	): number[] => {
		if (cuantosDistintos > max - min + 1) {
			throw new Error(
				"No se pueden generar tantos números distintos dentro del rango especificado."
			);
		}

		const numeros: number[] = [];

		while (numeros.length < cuantosDistintos) {
			const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

			if (!numeros.includes(randomNumber)) {
				numeros.push(randomNumber);
			}
		}

		return numeros;
	};

	const formarParejas = () => {
		// generamos, por cada elemento del primer array grupo1, el índice que le correspondería
		// de la pareja del grupo2, ya que ambos arrays serán iguales
		// esto obtendrá un índice que apuntará a una pareja única y aleatoria de grupo2 para cada uno.
		const posicionesDeParejas = generadorNumerosAleatoriosUnicos(
			grupo1.length,
			0,
			grupo1.length - 1
		);
		// ponemos el useState de emparejaos a true para saber cuándo mostrar los resultados
		if (grupo1.length > 0 && grupo2.length > 0) {
			setEmparejaos(true);
		}
	};

	return (
		<article>
			<h1>Actividad 1 de refuerzo</h1>
			<hr />
			<form onSubmit={onSubmit}>
				<label htmlFor="miembro1">Miembro grupo 1:</label>
				<input id="miembro1" type="text" onChange={onChangeMiembro1} required />
				<label htmlFor="miembro2">Miembro grupo 2:</label>
				<input id="miembro2" type="text" onChange={onChangeMiembro2} required />
				<button className="btn btn-success" type="submit">
					Añadir
				</button>
			</form>
			<button onClick={formarParejas}>Formar parejas</button>
			{emparejaos && (
				<>
				<h3>{grupo1[1]} parejas y {grupo2[0]}</h3>
				</>
			)}
		</article>
	);
};
