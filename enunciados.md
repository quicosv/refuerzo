# Enunciados

## ACTIVIDAD 1

Objetivo: Desarrollar un generador de parejas de acuerdo a dos arrays cuyos elementos se introducirán de forma dinámica.

- Crear un formulario con dos cuadros de edición etiquetados con “Miembro grupo 1” y “Miembro grupo 2”.
- Al efectuar el submit mediante un botón:
  - Se verificarán que ambos cuadros tienen información
  - Esa información no son solo espacios en blanco
  - El miembro del grupo 1 se agregará al primer array y el miembro del grupo 2 al segundo
- Hacer otro botón “Formar parejas”. Al hacer clic en el botón:
  - Se generarán las parejas de forma aleatoria, teniendo en cuenta que cada pareja constará de un miembro de cada grupo.
  - Se creará una tabla HTML con el resultado final con este diseño:
Parejas resultantes
Juan	Ana
Marta	Javi
…	…

## ACTIVIDAD 2

Objetivo: Desarrollar un cronómetro.

- Desarrollar el siguiente diseño HTML:
  - Un span para las décimas con el texto 0.
  - Un span para los segundos con el texto 0.
  - Un span para los minutos con el texto 0.
  - Un botón “Iniciar”, otro botón “Parar” y otro botón “Reiniciar”
- El botón iniciar iniciará el cronómetro. Para poder programar la temporalidad de las décimas, utilizar setInterval con un valor de milisegundos a 100.
- Cada Interval sumaremos 1 a las décimas. Controlar que cuando las décimas sean 10, se incrementen los segundos a 1 y las décimas se pongan a 0. Hacer lo que corresponde para el incremento de minutos según los segundos transcurridos.
- El botón Parar detendrá el crono (utilizar clearInterval).
- El botón Reiniciar pondrá todos los contadores a 0.

## ACTIVIDAD 3 

Objetivo: Desarrollar un componente en React que sea un reloj que se actualice cada segundo.

- Crear un componente React para reutilizarlo donde queramos que sea un reloj con formato horas:minutos:segundos que cada segundo actualice la hora.
- Utilizar las funciones de fecha de JavaScript y setInterval.

## ACTIVIDAD 4 

Objetivo: Desarrollar un contador de palabras y caracteres.

- En una página web, incluir un textarea
- Desarrollar los eventos y el código necesario para que, conforme escribamos en el textarea, en un párrafo HTML aparezcan el número de palabras introducidas y el número de caracteres.
- Por ejemplo, si escribimos “Hola mundo”, en el párrafo aparecería el mensaje: 2 palabras – 10 caracteres
- En un cuadro de texto adyacente pondremos un número de caracteres máximo.
- Si conforme vamos escribiendo el número de caracteres sobrepasa el máximo, por cada nuevo carácter sonará un pitido (ver ejemplos JavaScript de eventos donde usábamos el beep). También si borramos caracteres y la longitud sigue sobrepasando el máximo.

## ACTIVIDAD 5 

Objetivo: Desarrollar un juego de apuestas.

- Desarrollar una web en la que al principio nos pida en un prompt un dinero para apostar.
- Crear un formulario con:
  - Un cuadro de texto para poner un dinero para apostar.
  - Un botón.
- Al ejecutar el submit, se calcularán dos números aleatorios del 1 al 10 que aparecerán en dos párrafos con los valores Número jugador y Numero ordenador.
- Por ejemplo, aparecerá: Número jugador: 6 y Número ordenador: 8
- En este caso, el ordenador habrá ganado, luego se restará el dinero apostado al montante. En caso contrario, se incrementará el dinero al saldo.
- También se anunciará de alguna manera al usuario si ha ganado o ha perdido.
- Si el saldo es inferior a cero, se deshabilitará el botón del formulario para que no pueda volver a jugar.

## ACTIVIDAD 6 

Objetivo: Dibujar unos patrones en una página web utilizando bucles.

- Cuando en la actividad diga “punto” generaremos un span con un asterisco.
- Primer patrón:
  - Dibujar un cuadrado con relleno. La generación del cuadrado se hará mediante 10 filas de puntos así:
    - Primera a décima fila
    - 10 puntos
  - Dibujar un cuadrado sin relleno. La generación del cuadrado se hará mediante 10 filas de puntos así:
    - Primera fila
    - 10 puntos
    - Segunda a novena fila
    - 1 punto en la primera posición y 1 punto en la décima
    - Décima fila
    - 10 puntos
  - Triángulo
    - Primera fila
    - 1 punto
    - Segunda fila
    - 2 puntos
    - Tercera fila
    - 3 puntos
    - La cuarta fila tendrá 4 puntos, la quinta 5… así hasta la décima.
  - Medio rombo. Este patrón tendrá 19 filas
    - Primeras 10 filas
    - Igual que el triángulo
    - Filas 11 a 19
    - Fila 11
    - 9 puntos
    - Fila 12
    - 8 puntos
    - Cada fila siguiente hasta la última tendrá un punto menos.

## ACTIVIDAD 7 

Objetivo: Trabajar con arrays.

- Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en consola.
- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en consola.
- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en consola.
- Mostrar por consola todos los elementos dentro de un array sumándole uno a cada uno.
- Generar una copia de un array pero con todos los elementos incrementado en 1.
- Calcular el promedio y mostrarlo en consola.

## ACTIVIDAD 8 

Objetivo: Trabajar con strings.

- Mediante un formulario, introduciremos un texto y comunicaremos al usuario si el texto introducido es un palíndromo.
- Un texto es palíndromo si se lee igual de izquierda a derecha que de derecha a izquierda.

## ACTIVIDAD 9 

Objetivo: Desarrollar una galería de imágenes automática.

- Crear un array de 10 imágenes.
- Al cargarse la página web, de forma automática se irán sucediendo las diez imágenes en la página, dejando un intervalo de un segundo entre una y otra.
- Si pulsamos un botón “Acelerar”, las imágenes se irán sucediendo más rápido (en 100 milisegundos)
- Si pulsamos un botón “Frenar”, las imágenes se irán sucediendo de forma más lenta (en 100 milisegundos)
- Si pulsamos un botón “Revertir”, las imágenes se irán sucediendo en orden inverso.
- Si pulsamos de nuevo en el botón “Revertir” volveremos de nuevo al orden normal.

## ACTIVIDAD 10 

Objetivo: Desarrollar una aplicación en React que creará de forma dinámica una lista de personas.

- Mediante un formulario, introduciremos un nombre y un apellido. Al ejecutar el submit, ambos valores se convertirán en un objeto que añadiremos a un array.
- Ese array se visualizará en una lista. A la derecha de cada elemento de la lista, incorporaremos un botón “Eliminar” para eliminar la persona de la lista.
- Una vez se consiga, descentralizaremos la aplicación desarrollando diferentes componentes. La lista será un componente cuyas filas serán el resultado de renderizar un componente fila con los datos de cada persona.

