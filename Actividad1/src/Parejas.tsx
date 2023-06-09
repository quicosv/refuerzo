import { ChangeEvent, FormEvent, useState } from "react";
import { IMiembro } from "./interfaces/miembro.interface";

export const Parejas = () => {
	const [cuadroEdicion1, setCuadroEdicion1] = useState<string>("");
	const [miembro1, setMiembro1] = useState<IMiembro>({ miembro: "" });
	const [cuadroEdicion2, setCuadroEdicion2] = useState<string>("");
	const [miembro2, setMiembro2] = useState<IMiembro>({ miembro: "" });
	const [emparejaos, setEmparejaos] = useState<boolean>(false);
	// Nos declaramos los arrays con ambos grupos
	const [grupo1, setGrupo1] = useState<IMiembro[]>([]);
	const [grupo2, setGrupo2] = useState<IMiembro[]>([]);
	// Aquí creamos array de números donde almacenamos índices aleatorios para luego mostrar las parejas
	const [posicionesDeParejas, setPosicionesDeParejas] = useState<number[]>([]);

	const onChangeMiembro1 = (e: ChangeEvent<HTMLInputElement>) => {
		setCuadroEdicion1(e.target.value);
	};

	const onChangeMiembro2 = (e: ChangeEvent<HTMLInputElement>) => {
		setCuadroEdicion2(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEmparejaos(false);
		setMiembro1({ miembro: cuadroEdicion1 });
		setMiembro2({ miembro: cuadroEdicion2 });
		setGrupo1([...grupo1, miembro1]);
		setGrupo2([...grupo2, miembro2]);
		setCuadroEdicion1("");
		setCuadroEdicion2("");
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
		try {
			setPosicionesDeParejas(
				generadorNumerosAleatoriosUnicos(grupo1.length, 0, grupo1.length - 1)
			);
			// ponemos el useState de emparejaos a true para saber cuándo mostrar los resultados
			if (grupo1.length > 0 && grupo2.length > 0) {
				setEmparejaos(true);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<article>
			<h2>Formador de parejas</h2>
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
					<h3>Número de parejas: {grupo1.length}</h3>
					<ul>
						{grupo1.map((x, i) => (
							<li key={i}>
								{x.miembro} está emparejado con{" "}
								{grupo2[posicionesDeParejas[i]].miembro}.
							</li>
						))}
					</ul>
				</>
			)}
		</article>
	);
};
