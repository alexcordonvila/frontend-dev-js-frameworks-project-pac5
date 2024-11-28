# PJP PEC 3

En esta PEC se practican las técnicas de programación asíncrona en JavaScript: _callbacks_, promesas y _async/await_, así como las diferentes combinaciones entre ellas.

## Competencias

En esta PEC se desarrollan las siguientes competencias del Máster:

* [CB10] Que los estudiantes posean las habilidades de aprendizaje que les permitan continuar estudiando de una manera que tendrá que ser en gran medida autodirigida o autónoma.
* [CG2] Resolver problemas, identificando, analizando y definiendo sus elementos significativos.
* [CE3] Utilizar de manera adecuada los lenguajes de programación y las mejores herramientas de desarrollo para el análisis, el diseño y la implementación de lugares y aplicaciones web en función de las necesidades del proyecto.
* [CE5] Aplicar de la manera más adecuada los patrones de arquitectura de software más conveniente para cada problema.

## Objetivos

Los objetivos concretos de esta PEC son:

* Aprender a utilizar JavaScript y sus características básicas.
* Contribuir a conocer a fondo el lenguaje JavaScript para poder usarlo en el desarrollo de aplicaciones Web.
* Usar las técnicas de programación asíncrona que JavaScript ofrece.

## Entrega de la PEC

Una vez hayas realizado las actividades prácticas propuestas en este enunciado, **la entrega se realizará de forma doble**:

- Deberás enviar tus cambios al apartado del aula virtual de la UOC.
- Deberás enviar tus cambios al repositorio de GitHub Classroom.
 
Recuerda que este repositorio lo has clonado del repositorio en GitHub. Cuando trabajes en tu sistema, todos los cambios los harás en tus ficheros locales, los cuales tendrás que añadir y _comitear_ a tu repositorio Git. Estos cambios estarán en tu sistema hasta que hagas _push_ y los envíes al repositorio en GitHub.

Recuerda que debes trabajar en la rama _main_ o _master_ (la que se cree por defecto). Puedes hacer varios envíos.

En el aula virtual encontrarás una _checklist_ que te ayudará a repasar todos los pasos que debes hacer para la entrega de tu PEC.

## Puntuación

El hecho de trabajar con tests para verificar la funcionalidad del código os permitirá tener una idea de vuestra propia nota antes de la entrega. 

La puntuación de los ejercicios prácticos se basa en dos criterios: **Funcionalidad** e **Implementación**. Se espera que los ejercicios funcionen correctamente (pasen los tests) y que la implementación (el código) tenga una calidad adecuada. 

Algunos detalles a tener en cuenta:

- Se penalizará cualquier intento de _hardcodear_ los tests para forzar que pasen. Esta técnica consiste en cambiar la implementación para que devuelva únicamente el valor esperado por el test (cualquier otro test fallaría).
- Los tests automáticos están diseñados para detectar ejercicios erróneos o incompletos para casos concretos. El hecho de que un test pase no garantiza que el ejercicio esté realizado correctamente, es decir, que cubra todos los casos.
- Un ejercicio cuyos tests no pasan se puntuará con un 0 salvo que existan problemas con el test.
- Además de pasar los tests, el profesorado evaluará vuestro código en base a los siguientes criterios:
  - Legibilidad, sencillez y calidad del código.
  - Conocimientos de programación. Por ejemplo, no utilizar las estructuras de control adecuadas, como utilizar un bucle para construir una sentencia condicional o viceversa.

## Requisitos mínimos

- Tener instalado Visual Studio Code.
- Conocimientos básicos de Git y GitHub (Actividades 2 y 3 del Reto 1).
- Estudio de la introducción y repaso a JavaScript (Actividad 1 del Reto 2).
- Estudio de los conceptos de JavaScript (Actividades 2 y 3 del Reto 2).
- Estudio de la introducción a la asincronía en JavaScript (Actividad 1 del Reto 3).
- Estudio de los conceptos de asincronía de JavaScript (Actividad 2 del Reto 3).

## Actividades del reto (0,5ps)

Recuerda que este reto tiene asociadas dos actividades de evaluación que también deberás realizar. En particular, son las actividades 1.2 y 2.2, que encontrarás en el aula virtual. 

## Ejercicios prácticos (9,5p)

Para realizar los ejercicios prácticos debes dirigirte a la siguiente ruta, dentro del repositorio: `src/pec3/pec3.js`.
En este fichero deberás implementar las funciones que te indicamos en los ejercicios que verás más abajo.

Por otro lado, los tests que te permitirán saber si la solución que propones para los ejercicios es correcta están en el fichero `src/pec3/pec3.spec.js`.
**No debes editar este fichero**.
Ten en cuenta que los tests son condiciones que deben cumplir las funciones que implementarás en los ejercicios, por lo que pueden servirte de ayuda para corregirlos.

### Preparando el entorno

Una vez hecho **clone** del repositorio, debes instalar las dependencias del proyecto.

```
npm install
```

A continuación, para lanzar los tests debes ejecutar el siguiente comando:

```
npm test
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/pec3/pec3.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Tal y como te indicamos en la PEC 1, la primera vez que ejecutes `npm test` y se lancen los tests, muy posiblemente fallarán todos, ya que no hay ningún ejercicio implementado. Conforme vayas trabajando en los ejercicios y guardes el fichero, puede que algún test lance algún error. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Si tienes algún problema con los tests, no dudes en preguntar en el foro "Dudas PEC 3 | Dubtes PAC 3" del aula.

### Introducción: El viaje asíncrono de Brendan Eich a través de las Eras de JavaScript

Esta serie de ejercicios sigue a **Brendan Eich**, el creador de JavaScript, mientras mejora el lenguaje para resolver los desafíos de la programación asíncrona a lo largo del tiempo. Cada ejercicio corresponde a un hito en la evolución de JavaScript, con Brendan enfrentándose a las necesidades de los desarrolladores y adaptando el lenguaje para satisfacerlas.

**Nota:** Aunque Brendan Eich desempeñó un papel fundamental en el diseño de JavaScript, su evolución es el resultado de un esfuerzo colectivo. La comunidad de desarrolladores, las contribuciones de estándares como ECMA y el espíritu del software libre y de código abierto han sido esenciales para el éxito de JavaScript. Este conjunto de ejercicios es una ficción en homenaje a ese esfuerzo colectivo.

### Ejercicio 1: La era de ES3 y Netscape Navigator (Callbacks) - 1pt

> Año 1995. En los albores de JavaScript, Brendan Eich introduce los _callbacks_ para que Netscape Navigator pueda manejar tareas asíncronas. Es un pequeño paso para JavaScript, pero un gran paso para los navegadores.

Implementa una función `fetchUser(id, callback)` que recibe los siguientes argumentos:

- `id` es un valor de tipo `Number`, aunque acepta cualquier valor.
- `callback` es un valor no nulo de tipo `Function`. Esta función acepta un único argumento de tipo `String`.

La función implementada deberá cumplir las siguientes condiciones:

- Si `id` tiene alguno de los valores `1`, `2` o `3`, la función invocará la función `callback` usando como argumento uno de los siguientes valores dependiendo del valor de `id`:
  - Si `id` es `1`, pasará `"Brendan Eich"`
  - Si `id` es `2`, pasará `"Douglas Crockford"`
  - Si `id` es `3`, pasará `"Jeremy Ashkenas"`
- En cualquier de los casos anteriores, la función retornará `true`.
- Si `id` tiene cualquier otro valor, la función no invocará `callback` y retornará `false`.

### Ejercicio 2: La promesa de ES6 (Promises) - 1,5pts

> Año 2015. Brendan se une a la revolución de ES6, donde las _Promises_ llegan para acabar con el temido _callback hell_.

Implementa una función `getComments(fetchUser, fetchPosts, fetchComments)` que recibe los siguientes argumentos:

- `fetchUser` es un valor no nulo, de tipo `Function`. Esta función no acepta ningún argumento y devuelve una promesa que en caso de éxito se resuelve con un valor de tipo `Number` arbitrario (el ID usuario). En caso de fallo, se rechaza con un mensaje de error.
- `fetchPosts` es un valor no nulo, de tipo `Function`. Esta función acepta un único argumento de tipo `Number` (el ID de usuario) y devuelve una promesa que en caso de éxito se resuelve con un valor de tipo `Array` de `Number`s (los IDs de los posts de ese usuario) arbitrarios. En caso de fallo, se rechaza con un mensaje de error.
- `fetchComments` es un valor no nulo, de tipo `Function`. Esta función acepta un único argumento de tipo `Array` de `Number`s (los IDs de los posts de ese usuario) y devuelve una promesa que en caso de éxito se resuelve con un valor de `Array` de `String`s arbitrarios (los comentarios). En caso de fallo, se rechaza con un mensaje de error.

La función implementada deberá cumplir las siguientes condiciones:

- Debe devolver una promesa.
- Debe invocar la función `fetchUser`.
- Debe invocar la función `fetchPosts` usando como argumento la salida de la función `fetchUser`.
- Debe invocar la función `fetchComments` usando como argumento la salida de la función `fetchPosts`.
- En caso de éxito, la promesa debe resolverse con el valor devuelto por `fetchComments`.
- En caso de error, la promesa debe rechazarse con un valor de tipo `Error` y mensaje `Error: ERROR`, donde `ERROR` es el mensaje de error capturado.

### Ejercicio 3: Éxitos y rechazos de las promesas cumplidas (reject/resolve) - 1,5pts

> Durante el desarrollo de ES6, Brendan diseña mecanismos para manejar errores. Las _Promises_ ahora pueden rechazarse, y los desarrolladores finalmente pueden gestionar fallos de manera elegante.

Implementa la función `fetchUserPromise(id)` que recibe un único argumento:

- `id` es un valor de tipo `Number`, aunque acepta cualquier valor.

La función implementada deberá cumplir las siguientes condiciones:

- Debe retornar una promesa.
- Debe simular un retraso de 200 milisegundos.
- Si `id` está en el rango entre `1` y `999`, la promesa se resolverá con un valor de tipo `Object` siguiendo el siguiente formato: `{id: ID, name: "User ID"}`, donde `ID` es el mismo valor de `id`.
- Si `id` no está en el rango, la promesa se rechazará con un valor de tipo `Error` y el mensaje `"User id not found"`.
- Si `id` no es del tipo correcto, la promesa se rechazará con un valor de tipo `Error` y el mensaje `"Provided id not valid"`.

### Ejercicio 4: La Revolución Async/Await de ES8 (async/await) - 1,5pts

> Año 2017. En ES8, Brendan ayuda a introducir `async/await`, cambiando para siempre cómo se escribe código asíncrono. Ahora, con la ayuda del existente `try/catch`, se puede escribir código asíncrono como si fuera síncrono.

Implementa la función `fetchAsyncData(asyncCallback)` que recibe un único argumento:

- `asyncCallback` es un valor de tipo `Function` que retorna una promesa.

La función implementada deberá cumplir las siguientes condiciones:

- Debe retornar siempre un `Object`.
- Debe llamar la promesa retornada por `asyncCallback` dentro de un bloque `try/catch`.
- Si la promesa se resuelve correctamente, debe retornar un objeto con el siguiente formato:
  ```js
  {
    status: "success", 
    data: RESULT
  }
  ```
  Donde `RESULT` es el valor devuelto por `asyncCallback`.
- Si la promesa es rechazada, debe capturar el error y retornar un objeto con el siguiente formato:
  ```js
  {
    status: "error", 
    message: "ERROR_MESSAGE"
  }
  ```
  Donde `ERROR_MESSAGE` es el mensaje del error.

### Ejercicio 5: Encadenando las enseñanzas del pasado - 1,5pts

Implementa la función `getCommentsAsync(fetchUser, fetchPosts, fetchComments)` que haga exactamente lo mismo que la función del ejercicio 2, `getComments`, pero esta vez usando `async/await`.

### Ejercicio 6: El futuro no se detiene (procesos en segundo plano) - 2,5pts

> Los desarrolladores, siempre a la vanguardia, enfrentan los desafíos modernos de desarrollar aplicaciones enteras en la web. Con un uso inteligente de la asincronía, se pueden manejar tareas de larga duración y procesos en segundo plano. ¡No sabemos qué vendrá ESNext! ;)

El cometido de este ejercicio es diseñar una función capaz de llevar a cabo múltiples tareas en segundo plano, de tal manera que permita conocer el estado de cada proceso en todo momento. Para conseguir este objetivo, la función deberá invocar de forma asíncrona las tareas y devolver una función que nos proporcionará información sobre el estado de cada proceso.

Implementa la función `createTaskWorker()` que no recibe ningún argumento. Esta función debe implementar las siguientes funcionalidades:

- Debe retornar un objeto con dos parámetros: 
  - `addTask(task)`, donde `addTask` es de tipo `Function` y acepta un parámetro `task` de tipo `Function` asíncrona.
  - `getStatus()`, de tipo `Function`.
- Debe contener una estructura de datos en la que guardar la información de los `task`s que se envían, con la siguiente información para cada `task`:
  - `status`, de tipo `String`, con uno de los siguientes valores: `"pending"`, `"in-progress"`, `"completed"` o `"failed"`. 
  - `result`, que debe contener el resultado de la llamada asíncrona de `task()` en caso de resolverse.
  - `error`, que debe contener el error de la llamada asíncrona de `task()` en caso de recharzarse.
- La función `addTask(task)` deberá actualizar la estructura de datos con la información de la nueva tarea `task` y planificar ejecutarla en diferido, no inmediatamente, tan pronto como sea posible. De ahí que se denomine **proceso en segundo plano**.
- La información `status` de cada tarea deberá ser `"pending"` antes de la ejecución, `"in-progress"` en el momento que inicia su ejecución, `"completed"` en caso de resolverse y `"failed"` en caso de rechazarse.
- En cualquier momento, deberá poder llamarse la función `getStatus()` y esta debe devolver la información actualizada de cada una de las tareas ejecutándose en segundo plano.

El ejemplo siguiente sirve para probar y visualizar la función `createTaskWorker`:

```js
(async function main() {
    const worker = createTaskWorker();

    console.log("Adding tasks...");
    worker.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 1 done!"), 1000)));
    worker.addTask(() => new Promise((resolve) => setTimeout(() => resolve("Task 2 done!"), 1500)));
    worker.addTask(() => new Promise((_, reject) => setTimeout(() => reject("Task 3 failed!"), 2000)));

    // Check the status periodically
    const interval = setInterval(() => {
        const statuses = worker.getStatus();
        console.table(statuses);

        // Stop checking when all tasks are finished
        if (statuses.every((task) => task.status === "completed" || task.status === "failed")) {
            clearInterval(interval);
            console.log("All tasks completed.");
            console.table(statuses);
        }
    }, 500);
})();
```
