"use strict";
const filledSquare = () => {
    const canvas = document.querySelector('#cuadradoRelleno');
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
const emptySquare = () => {
    const canvas = document.querySelector('#cuadradoSinRelleno');
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
const triangle = () => {
    const canvas = document.querySelector('#triangulo');
};
const halfRhombus = () => {
    const canvas = document.querySelector('#medioRombo');
};
const main = () => {
    filledSquare();
    emptySquare();
    triangle();
    halfRhombus();
};
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(main, 1);
}
else {
    document.addEventListener('DOMContentLoaded', main);
}
//# sourceMappingURL=index.js.map