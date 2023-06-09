// Funciones auxiliares
const filledSquare = (): void => {
	const canvas: HTMLDivElement = document.querySelector('#cuadradoRelleno')!;
	for (let rowCounter = 1; rowCounter <= 10; rowCounter++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let columnCounter = 1; columnCounter <= 10; columnCounter++) {
			const column = document.createElement('span');
			column.classList.add('dot');
			row.appendChild(column);
		}
		canvas.appendChild(row);
	}
};

const emptySquare = (): void => {
	const canvas: HTMLDivElement = document.querySelector('#cuadradoSinRelleno')!;
	for (let rowCounter = 1; rowCounter <= 10; rowCounter++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let columnCounter = 1; columnCounter <= 10; columnCounter++) {
			const column = document.createElement('span');
			if (rowCounter === 1 || rowCounter === 10) {
				column.classList.add('dot');
			}
			else {
				if (columnCounter === 1 || columnCounter === 10) {
					column.classList.add('dot');
				}
				else {
					column.classList.add('empty');
				}
			}
			row.appendChild(column);
		}
		canvas.appendChild(row);
	}
};

const triangle = (): void => {
	const canvas: HTMLDivElement = document.querySelector('#triangulo')!;
	for (let rowCounter = 1; rowCounter <= 10; rowCounter++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let columnCounter = 1; columnCounter <= rowCounter; columnCounter++) {
			const column = document.createElement('span');
			column.classList.add('dot');
			row.appendChild(column);
		}
		canvas.appendChild(row);
	}
};

const halfRhombus = (): void => {
	const canvas: HTMLDivElement = document.querySelector('#medioRombo')!;
	for (let rowCounter = 1; rowCounter <= 10; rowCounter++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let columnCounter = 1; columnCounter <= rowCounter; columnCounter++) {
			const column = document.createElement('span');
			column.classList.add('dot');
			row.appendChild(column);
		}
		canvas.appendChild(row);
	}
	for (let rowCounter = 9; rowCounter >= 1; rowCounter--) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let columnCounter = 1; columnCounter <= rowCounter; columnCounter++) {
			const column = document.createElement('span');
			column.classList.add('dot');
			row.appendChild(column);
		}
		canvas.appendChild(row);
	}
};

// Función principal
const main = (): void => {
	filledSquare();
	emptySquare();
	triangle();
	halfRhombus();
};

// Comprobamos si la página se ha cargado
if (document.readyState === 'complete' || document.readyState === 'interactive') {
	/* 
	readyState tiene 3 posible valores:

	complete significa que se ha cargado la página completamente.

	interactive indica que puede haber estilos o imágenes que todavía no se hayan cargado.

	loading indica que no se ha cargado.

	En este caso esperamos un milisegundo y ejecutamos la función.
	*/
	setTimeout(main, 1);
}
else {
	// El valor es loading, así que el documento se está cargando
	document.addEventListener('DOMContentLoaded', main);
}