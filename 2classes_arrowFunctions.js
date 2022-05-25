
/* Nivell 1
 - Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */


/* console.log(
    ((a, b) => {
      return a + b;
    })(5, 5)
  ); *///Una manera d´apuntar-ho

console.log(((a, b) => (a + b))(5, 5))//En una linia no cal return, està implicit

/* Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */


let object = (yourName) => ({

    yourName: yourName

})
console.log(object("Albert"))

/* - Exercici 2
Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'.
 Invoca el mètode dirNom des de fora de la classe.*/

class Person {
    #name
    constructor(name) {
        this.#name = name
    }

    /* get Name() {
        return this.#name
    }  *///és el mateix o fa el mateix que sayName
    sayName(name) {
        console.log(`El meu nom és:${this.#name}`)
    }

}
const myName = new Person("Albert")
myName.sayName() 
