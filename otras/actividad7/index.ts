// Aquí van las funciones auxiliares

const createArray = (length: number): number[] => {
	let array: number[] = [];
	for (let i = 0; i < length; i++) {
		const newElement: number = Math.floor(Math.random() * 100) + 1;
		array.push(newElement);
	};
	return array;
};

const showArrayWhile = (array: number[]): void => {
	console.log("Mostrando elementos con el antiquísimo bucle while:");
	let counter = 0;
	while (counter < array.length) {
		console.log(array[counter]);
	};
};

const showArrayFor = (array: number[]): void => {
	console.log("Mostrando elementos con el moderno bucle for:");
	for (const element of array) {
		console.log(element);
	};
};

const showArrayForEach = (array: number[]): void => {
	console.log("Mostrando elementos con el modernísimo forEach:");
	array.forEach((x) => console.log(x));
};

const calculateAverage = (array: number[]): number => {
	/* 
	reduce permite calcular la suma de los elementos del array.

	El primer argumento es la variable que irá recogiendo la suma.

	El segundo argumento es el elemento del array por el que va la iteración.

	Después de la flecha se pone la fórmula que tiene que hacer (en este caso la suma), una coma y el valor inicial de la variable que recoge la suma (en este caso 0).
	*/
	let total = array.reduce((subTotal, value) => subTotal + value, 0);
	return total / array.length;
};

// aquí está la función principal, que debe manejar todo el programa

const main = (): void => {
let answer: string | null = prompt("Cantidad de números");
let userLength: number = parseInt(answer as string);
if (isNaN(userLength)) {
	alert('No has escrito un número.');
}
else {
	const yourArray = createArray(userLength);
	showArrayWhile(yourArray);
	showArrayFor(yourArray);
	showArrayForEach(yourArray);
	calculateAverage(yourArray);
};
};

main();