/*------------------
1)
Completa l'objecte de sota.
Afegeix-li 3 parelles de "key/value"!
------------------*/
const person = {
  name: "Sofia",
  age: 20,
};

console.log(person);

/*------------------
2)
Accedeix al value "name" de l'objecte "person".
Pista: pots fer servir la "dot notation" o la "bracket notation".
------------------*/

// console.log("The person's name is:", ???)

/*------------------
3)
Actualitza el "name" de "person" a "Marco".
No canviïs l'objecte original sino que
reassigna el valor de "name". Si ho fas correctament,
la següent frase hauria d'imprimir "true".
------------------*/

// console.log("The person's name has been updated:", (person.name === "Marco"));

/*------------------
4)
Arregla el següent codi per què imprimeixi
el que s'espera!
------------------*/

const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description:
    "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/",
};

// console.log("The book ", book, " was written by ", author, " and is ", pages, "pages.");

/*------------------
5)
És hora d'aprendre una cosa nova! Hi ha una nova forma
d'escriure un "string" - se'n diu "template literal".
1) Encapsula tot l'"string" en "backticks": ``
2) Si en cap moment vols afegir JavaScript (o el nom d'una variable),
encapsula aquella part amb el símbol del dòlar i les claus: ${}
3) Se sobreentén que la resta són "strings"!
Pots aprendre'n més a:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Emplena la declaració de sota. A partir d'ara, als console.logs alternarem entre
"template literals" i "quotations".
------------------*/

// console.log(`The book ${book.title} was written by ${} and is ${} pages.`);

/*------------------
6)
Arregla el següent codi per què imprimeixi
el que s'espera! Pots fer servir la "dot notation"
o la "bracket notation" - revisa les slides si
has oblidat com accedir als valors dels "nested objects".
------------------*/

const user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofia",
    address: {
      line1: "Carrer de CodeOp",
      line2: "42",
      city: "Barcelona",
      country: "Spain",
    },
  },
};

// console.log(`${name} lives at ${line1} ${line2}, ${city}, ${country}.`);

/*------------------
7)
Actualitza l'email i l'adreça de l'usuari
per què el console.log imprimeixi "true"!

El nou email hauria de ser "sofia@prod.com"
i la nova ciutat hauria de ser "Madrid".
------------------*/

// Supongamos que tienes un objeto de usuario con la información actual
let user2 = {
  email: "usuario@dominio.com",
  personalInfo: {
    address: {
      city: "Barcelona"
    }
  }
};

// Actualiza el email y la dirección
user2.email = "sofia@prod.com";
user2.personalInfo.address.city = "Madrid";

// Imprime en la consola si la actualización fue exitosa
console.log("La información del usuario se ha actualizado:", (user2.email === "sofia@prod.com") && (user2.personalInfo.address.city === "Madrid"));


// console.log("The person's name has been updated:", (user.email === "sofia@prod.com") && (user.personalInfo.address.city === "Madrid"));

/*------------------
8)
Crea un nou objecte des de zero i anomena'l "animal".
Després, escull un animal i descriu-lo - inclou elements
com el color, el tipus, el que menja, etc.
Fes un "nested object" com a mínim.
------------------*/

// Crear un nuevo objeto "animal"
let animal = {
  tipo: "León",
  color: "Amarillo",
  alimentacion: "Carnívoro",
  caracteristicas: {
    patas: 4,
    cola: true,
    pelaje: "Corto y áspero"
  }
};

// Imprimir información sobre el animal en la consola
console.log("Información del animal:");
console.log("Tipo: " + animal.tipo);
console.log("Color: " + animal.color);
console.log("Alimentación: " + animal.alimentacion);
console.log("Características:");
console.log("  Patas: " + animal.caracteristicas.patas);
console.log("  Cola: " + (animal.caracteristicas.cola ? "Sí" : "No"));
console.log("  Pelaje: " + animal.caracteristicas.pelaje);


// console.log(`The data type of ${animal} is a ${typeof animal}`);

/*------------------
9)
Actualitza com a mínim un valor del teu objecte.
Escriu els teus propis console.logs per verificar
els canvis. (per agafar idees, pots fer un cop d'ull
a les preguntes 3 i 6).
------------------*/

// Crear un objeto con algunas propiedades
let animal2 = {
  tipo: "León",
  color: "Amarillo",
  alimentacion: "Carnívoro",
  caracteristicas: {
    patas: 4,
    cola: true,
    pelaje: "Corto y áspero"
  }
};

// Mostrar el estado inicial del objeto
console.log("Estado inicial del animal:");
console.log(animal2);

// Actualizar al menos un valor del objeto
animal2.color = "Marrón";
animal2.caracteristicas.pelaje = "Largo y suave";

// Mostrar el estado actualizado del objeto
console.log("\nEstado actualizado del animal:");
console.log(animal2);


// console.log(`The data type of ${animal} is a ${typeof animal}`);

/*------------------
10)
Hi ha tres errors en el següent objecte.
Troba'ls i arregla'ls!
------------------*/

// const user2 = {
//   id: 102,
//   email: "pedro@dev.com"
//   personalInfo: {
//       name: Pedro,
//       address: {
//           line1: "Carrer de CodeOp",
//           line2: "42",
//           city; "Barcelona",
//           country: "Spain"
//       }
//   }
// }

/*------------------
11)
Torna a revisar tot el teu codi anterior.
Descomenta cada línia on hagis fet servir
la "dot notation" i la "bracket notation"
i reescriu el codi fent servir el sistema contrari.
Assegura't de que el teu codi segueix funcionant!
------------------*/
