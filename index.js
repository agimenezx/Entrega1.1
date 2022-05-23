/* Nivell 1
- Exercici 1
Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.
 */

function userName1(name) {
  console.log(name);
}
userName1("Albert");

/* Nivell 2
- Exercici 1
Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. */

function userName2() {
  const name = "Albert";
  const surName = "Giménez";

  console.log(`Nom: ${name} Cognoms: ${surName}`);
}

userName2();

/* - Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal. */

function userName3(name) {
  return name;
}
console.log(`El nom que retorna és ${userName3("Joan")}`);

/* Nivell 3
- Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
 Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

let array = []
let sum = 0
function toCounter(){
  for (i = 0; i < 10; i++){
sum += sum(i)

  }
  
}

  /*   for(let counter = 0; counter < 10;counter ++){

      array.push(counter)
     
    } */

    
 

/* - Exercici 2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre. */

const seeName = (function (name) {
    return name
})("Jordi");

console.log(seeName)


