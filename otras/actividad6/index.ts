// Funciones auxiliares
const filledSquare = (): void => {};

const emptySquare = (): void => {};

const triangle = (): void => {};

const halfRhombus = (): void => {};

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