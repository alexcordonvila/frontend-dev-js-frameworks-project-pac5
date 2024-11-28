# PJP PAC 3

En aquesta PAC es practiquen les tècniques de programació asíncrona a JavaScript: _callbacks_, promeses i _async/await_, així com les diferents combinacions entre elles.

## Competències

En aquesta PAC es desenvolupen les següents competències del Màster:

* [CB10] Que els estudiants tinguin les habilitats d'aprenentatge que els permetin continuar estudiant d'una manera que haurà de ser en gran mesura autodirigida o autònoma.
* [CG2] Resoldre problemes, identificant, analitzant i definint-ne els elements significatius.
* [CE3] Utilitzar de manera adequada els llenguatges de programació i les millors eines de desenvolupament per a l'anàlisi, el disseny i la implementació de llocs i aplicacions web en funció de les necessitats del projecte.
* [CE5] Aplicar de la manera més adequada els patrons d'arquitectura de programari més convenient per a cada problema.

## Objectius

Els objectius concrets d'aquesta PAC són:

* Aprendre a utilitzar JavaScript i les seves característiques bàsiques.
* Contribuir a conèixer a fons el llenguatge JavaScript per poder fer-lo servir en el desenvolupament d'aplicacions Web.
* Utilitzar les tècniques de programació asíncrona que ofereix JavaScript.

## Lliurament de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, **el lliurament es realitzarà de forma doble**:

- Hauràs d'enviar els teus canvis a l'apartat de l'aula virtual de la UOC.
- Hauràs d'enviar els teus canvis al repositori de GitHub Classroom.

Recorda que aquest repositori l'has clonat del repositori a GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran al teu sistema fins que facis _push_ i els enviïs al repositori a GitHub.

Recorda que has de treballar a la branca _main_ o _master_ (la que es crei per defecte). Pots fer diversos enviaments.

A l'aula virtual trobaràs una _checklist_ que t'ajudarà a repassar tots els passos que has de fer per al lliurament de la teva PAC.

## Puntuació

El fet de treballar amb tests per verificar la funcionalitat del codi us permetrà tenir una idea de la vostra pròpia nota abans del lliurament.

La puntuació dels exercicis pràctics es basa en dos criteris: **Funcionalitat** i **Implementació**. S'espera que els exercicis funcionin correctament (passin els tests) i que la implementació (el codi) tingui una qualitat adequada.

Alguns detalls a tenir en compte:

- Es penalitzarà qualsevol intent de _hardcodejar_ els tests per forçar que passin. Aquesta tècnica consisteix a canviar la implementació perquè retorni únicament el valor esperat pel test (qualsevol altre test fallaria).
- Els tests automàtics estan dissenyats per detectar exercicis erronis o incomplets per a casos concrets. El fet que un test passi no garanteix que l'exercici estigui realitzat correctament, és a dir, que cobreixi tots els casos.
- Un exercici els tests del qual no passen es puntuarà amb un 0 llevat que hi hagi problemes amb els tests.
- A més de passar els tests, el professorat avaluarà el vostre codi en base als següents criteris:
 - Llegibilitat, senzillesa i qualitat del codi.
 - Coneixements de programació. Per exemple, no utilitzar les estructures de control adequades, com ara utilitzar un bucle per construir una sentència condicional o viceversa.

## Requisits mínims

- Tenir instal·lat Visual Studio Code (o qualsevol altre IDE).
- Coneixements bàsics de Git i GitHub (Activitats 2 i 3 del Repte 1).
- Estudi de la introducció i repàs a JavaScript (Activitat 1 del Repte 2).
- Estudi dels conceptes de JavaScript (Activitats 2 i 3 del Repte 2).
- Estudi de la introducció a l'assincronia en JavaScript (Activitat 1 del Repte 3).
- Estudi dels conceptes d'assincronia de JavaScript (Activitat 2 del Repte 3).

## Activitats del repte - 0,5 punts

Recorda que aquest repte té associades dues activitats d'avaluació que també has de realitzar. En particular, són les activitats 1.2 i 2.2, que trobaràs a l'aula virtual.

## Exercicis pràctics - 9,5 punts

Per realitzar els exercicis pràctics t'has de dirigir a la següent ruta, dins del repositori: `src/pec3/pec3.js`.
En aquest fitxer hauràs d'implementar les funcions que t'indiquem als exercicis que veuràs més avall.

D'altra banda, els tests que et permetran saber si la solució que proposes per als exercicis és correcta són al fitxer `src/pec3/pec3.spec.js`.
**No has d'editar aquest fitxer**.
Tingues en compte que els tests són condicions que han de complir les funcions que implementaràs en els exercicis, per la qual cosa et poden servir d'ajuda per corregir-los.

### Preparant l'entorn

Un cop fet **clone** del repositori, has d'instal·lar les dependències del projecte.

```
npm install
```

A continuació, per llançar els tests has d'executar la següent ordre:

```
npm test
```

La instrucció anterior llançarà els tests cada vegada que desis el fitxer `src/pec3/pec3.js`, que és precisament on implementaràs els exercicis d'aquesta PAC.

Tal com t'indiquem a la PAC 1, la primera vegada que executis `npm test` i es llencin els tests, molt possiblement fallaran tots, ja que no hi ha cap exercici implementat. A mesura que vagis treballant en els exercicis i guardis el fitxer, pot ser que algun test llanci algun error. Revisa el missatge d'error que s'imprimeix per conèixer el format i entendre com es notifiquen els errors.

Si tens algun problema amb els tests, no dubtis a preguntar al fòrum "Dudas PAC 3 | Dubtes PAC 3" de l'aula.

### Introducció: El viatge asíncron de Brendan Eich a través de les Eres de JavaScript

Aquesta sèrie d'exercicis segueix a **Brendan Eich**, el creador de JavaScript, mentre millora el llenguatge per resoldre els desafiaments de la programació asíncrona al llarg del temps. Cada exercici correspon a una fita en l'evolució de JavaScript, amb Brendan enfrontant-se a les necessitats dels desenvolupadors i adaptant el llenguatge per satisfer-les.

**Nota:** Encara que Brendan Eich va tenir un paper imprescindible en el disseny de JavaScript, la seva evolució és el resultat d'un esforç col·lectiu. La comunitat de desenvolupadors, les contribucions d'estàndards com ECMA i l'esperit del programari lliure i del codi obert han estat essencials per a l'èxit de JavaScript. Aquest conjunt d'exercicis és una ficció en homenatge a aquest esforç col·lectiu.

### Exercici 1: L'Era d'ES3 i Netscape Navigator (Callbacks) - 1 punt

> Any 1995. Als inicis de JavaScript, Brendan Eich introdueix els _callbacks_ perquè Netscape Navigator pugui gestionar tasques asíncrones. És un petit pas per a JavaScript, però un gran pas per als navegadors.

Implementa una funció `fetchUser(id, callback)` que rep els següents arguments:

- `id` és un valor de tipus `Number`, encara que accepta qualsevol valor.
- `callback` és un valor no nul de tipus `Function`. Aquesta funció accepta un únic argument de tipus `String`.

La funció implementada haurà de complir les següents condicions:

- Si `id` té algun dels valors `1`, `2` o `3`, la funció invocarà la funció `callback` usant com a argument un dels següents valors segons el valor de `id`:
  - Si `id` és `1`, passarà `"Brendan Eich"`.
  - Si `id` és `2`, passarà `"Douglas Crockford"`.
  - Si `id` és `3`, passarà `"Jeremy Ashkenas"`.
- En qualsevol dels casos anteriors, la funció retornarà `true`.
- Si `id` té qualsevol altre valor, la funció no invocarà `callback` i retornarà `false`.

### Exercici 2: La promesa d'ES6 (Promises) - 1,5 punts

> Any 2015. Brendan s'apunta a la revolució d'ES6, on les _Promises_ arriben per acabar amb el temut _callback hell_.

Implementa una funció `getComments(fetchUser, fetchPosts, fetchComments)` que rep els següents arguments:

- `fetchUser` és un valor no nul, de tipus `Function`. Aquesta funció no accepta cap argument i retorna una promesa que en cas d'èxit es resol amb un valor de tipus `Number` arbitrari (l'ID usuari). En cas de fallida, es rebutja amb un missatge d'error.
- `fetchPosts` és un valor no nul, de tipus `Function`. Aquesta funció accepta un únic argument de tipus `Number` (l'ID de l'usuari) i retorna una promesa que en cas d'èxit es resol amb un valor de tipus `Array` de `Number`s (els IDs dels posts d'aquest usuari) arbitraris. En cas de fallida, es rebutja amb un missatge d'error.
- `fetchComments` és un valor no nul, de tipus `Function`. Aquesta funció accepta un únic argument de tipus `Array` de `Number`s (els IDs dels posts d'aquest usuari) i retorna una promesa que en cas d'èxit es resol amb un valor d'`Array` de `String`s arbitraris (els comentaris). En cas de fallida, es rebutja amb un missatge d'error.

La funció implementada haurà de complir les següents condicions:

- Ha de retornar una promesa.
- Ha d'invocar la funció `fetchUser`.
- Ha d'invocar la funció `fetchPosts`, usant com a argument la sortida de la funció `fetchUser`.
- Ha d'invocar la funció `fetchComments`, usant com a argument la sortida de la funció `fetchPosts`.
- En cas d'èxit, la promesa s'ha de resoldre amb el valor retornat per `fetchComments`.
- En cas d'error, la promesa s'ha de rebutjar amb un valor de tipus `Error` i missatge `Error: ERROR`, on `ERROR` és el missatge d'error capturat.

### Exercici 3: Èxits i fracassos de les promeses fetes (reject/resolve) - 1,5 punts

> Durant el desenvolupament d'ES6, Brendan dissenya mecanismes per gestionar errors. Les _Promises_ ara poden rebutjar-se, i els desenvolupadors finalment poden gestionar fallides de manera elegant.

Implementa la funció `fetchUserPromise(id)` que rep un únic argument:

- `id` és un valor de tipus `Number`, encara que accepta qualsevol valor.

La funció implementada haurà de complir les següents condicions:

- Ha de retornar una promesa.
- Ha de simular un retard de 200 mil·lisegons.
- Si `id` està en el rang entre `1` i `999`, la promesa es resoldrà amb un valor de tipus `Object` seguint el següent format: `{id: ID, name: "User ID"}`, on `ID` és el mateix valor d'`id`.
- Si `id` no està en el rang, la promesa es rebutjarà amb un valor de tipus `Error` i el missatge `"User id not found"`.
- Si `id` no és del tipus correcte, la promesa es rebutjarà amb un valor de tipus `Error` i el missatge `"Provided id not valid"`.

### Exercici 4: La Revolució Async/Await d'ES8 (async/await) - 1,5 punts

> Any 2017. Amb ES8, Brendan ajuda a introduir `async/await`, canviant per sempre com s'escriu codi asíncron. Ara, amb l'ajuda de `try/catch`, es pot escriure codi asíncron com si fos síncron.

Implementa la funció `fetchAsyncData(asyncCallback)` que rep un únic argument:

- `asyncCallback` és un valor de tipus `Function` que retorna una promesa.

La funció implementada haurà de complir les següents condicions:

- Ha de retornar sempre un `Object`.
- Ha d'invocar la promesa retornada per `asyncCallback` dins d'un bloc `try/catch`.
- Si la promesa es resol correctament, ha de retornar un objecte amb el següent format:
  ```js
  {
    "status": "success",
    "data": "RESULT"
  }
  ```
  On `RESULT` és el valor retornat per `asyncCallback`.
- Si la promesa és rebutjada, ha de capturar l’error i retornar un objecte amb el següent format:
  ```js
  {
    status: "error", 
    message: "ERROR_MESSAGE"
  }
  ```
  On `ERROR_MESSAGE` és el missatge de l’error.

### Exercici 5: Enllaçant les ensenyances del passat - 1,5 punts

Implementa la funció `getCommentsAsync(fetchUser, fetchPosts, fetchComments)` que faci exactament el mateix que la funció de l’exercici 2, `getComments`, però aquesta vegada fent servir `async/await`.

### Exercici 6: El futur no s’atura (processos en segon pla) - 2,5 punts

> Els desenvolupadors, sempre a l’avantguarda, s’enfronten als desafiaments moderns de desenvolupar aplicacions a la web. Amb un ús intel·ligent de l’asincronia, es poden gestionar tasques de llarga durada i processos en segon pla. No sabem què serà ESNext! ;)

L’objectiu d’aquest exercici és dissenyar una funció capaç de dur a terme múltiples tasques en segon pla, de manera que permeti conèixer l’estat de cada procés en tot moment. Per aconseguir aquest objectiu, la funció haurà d’invocar de forma asíncrona les tasques i retornar una funció que ens proporcioni informació sobre l’estat de cada procés.

Implementa la funció `createTaskWorker()`, que no rep cap argument. Aquesta funció ha d’implementar les funcionalitats següents:

- Ha de retornar un objecte amb dos paràmetres:
  - `addTask(task)`, on `addTask` és de tipus `Function` i accepta un paràmetre `task` de tipus `Function` asíncrona.
  - `getStatus()`, de tipus `Function`.
- Ha de contenir una estructura de dades en la qual guardar la informació de les `task`s que s’envien, amb la següent informació per a cada `task`:
  - `status`, de tipus `String`, amb un dels valors següents: `"pending"`, `"in-progress"`, `"completed"` o `"failed"`. 
  - `result`, que ha de contenir el resultat de la crida asíncrona de `task()` en cas que es resolgui.
  - `error`, que ha de contenir l’error de la crida asíncrona de `task()` en cas que es rebutgi.
- El mètode `addTask(task)` haurà d’actualitzar l’estructura de dades amb la informació de la nova tasca `task` i planificar-ne l’execució en diferit, no immediatament, tan aviat com sigui possible. Per això es denomina **procés en segon pla**.
- La informació `status` de cada tasca ha de ser `"pending"` abans de l’execució, `"in-progress"` en el moment que comença l’execució, `"completed"` en cas que es resolgui i `"failed"` en cas que es rebutgi.
- En qualsevol moment, es podrà invocar al mètode `getStatus()` i aquest ha de retornar la informació actualitzada de cadascuna de les tasques que s’executen en segon pla.

L’exemple següent serveix per provar i visualitzar la funció `createTaskWorker`:

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
