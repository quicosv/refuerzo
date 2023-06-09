// Variable global para almacenar el valor anterior del input
    let valorAnterior = 0;

    function jugar() {
        // Obtener el dinero apostado del cuadro de texto
        let dineroApostado = parseFloat(document.getElementById("dineroApostado").value);
        // Generar dos números aleatorios del 1 al 10
        let numeroJugador = Math.floor(Math.random() * 10) + 1;
        let numeroOrdenador = Math.floor(Math.random() * 10) + 1;

        // Mostrar los números generados en la página
        document.getElementById("numeroJugador").innerHTML = "Número del jugador: " + numeroJugador;
        document.getElementById("numeroOrdenador").innerHTML = "Número del ordenador: " + numeroOrdenador;

        if (numeroJugador > numeroOrdenador) {
            // El jugador ha ganado
            document.getElementById("resultadoJuego").innerHTML = "¡Has ganado!";
            // Se suma el dinero apostado al saldo
            dineroApostado *= +1;
        } else if (numeroJugador < numeroOrdenador) {
            // El jugador ha perdido
            document.getElementById("resultadoJuego").innerHTML = "Has perdido.";
            // Se resta el dinero apostado al saldo
            dineroApostado *= -1;
        } else {
            // Empate
            document.getElementById("resultadoJuego").innerHTML = "Empate.";
            // El dinero apostado se establece como 0
            dineroApostado = 0;
        }

        // Establecer el saldo inicial en 100
        let saldo = parseFloat(document.getElementById("saldo").innerHTML);

        // Actualizar el saldo con el dinero apostado
        saldo += dineroApostado;

        // Verificar si el saldo es menor que 0 o igual a 0
        if (saldo <= 0) {
            saldo = 0;
            // Deshabilitar el botón de jugar
            document.getElementById("botonJugar").disabled = true;
            // Mostrar mensaje de quedarse sin dinero
            document.getElementById("resultadoJuego").innerHTML = "Te has quedado sin dinero, inténtalo de nuevo";
            // Reiniciar el juego después de 3 segundos
            setTimeout(function () {
                reiniciarJuego();
            }, 3000);
        }

        // Mostrar el saldo actualizado en la página
        document.getElementById("saldo").innerHTML = saldo.toFixed(2);
    }

    function reiniciarJuego() {
        // Habilitar el botón de jugar
        document.getElementById("botonJugar").disabled = false;
        // Restablecer los valores iniciales
        document.getElementById("dineroApostado").value = "";
        document.getElementById("numeroJugador").innerHTML = "";
        document.getElementById("numeroOrdenador").innerHTML = "";
        document.getElementById("resultadoJuego").innerHTML = "";
        document.getElementById("saldo").innerHTML = "100.00";
    }

    function actualizarMaximo() {
        let saldo = parseFloat(document.getElementById("saldo").innerHTML);
        document.getElementById("dineroApostado").max = saldo.toFixed(2);
    }

    document.getElementById("dineroApostado").addEventListener("input", function () {
        let nuevoValor = parseFloat(document.getElementById("dineroApostado").value);
        valorAnterior = nuevoValor;
    });
    // Restablecer el valor anterior al cargar la página
    valorAnterior = parseFloat(document.getElementById("dineroApostado").value);

