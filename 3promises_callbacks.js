/* Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no. */

function getPromise() {
  return new Promise((res, rej) => {
    let a = 5;
    if (a === 5) {
      res("Missió satisfactoria");
    } else {
      rej("Fracàs absolut");
    }
  });
}
getPromise()
  .then((message) => {
    console.log(`Èxit ${message}`);
  })
  .catch((err) => {
    console.log(`OHHHHHH ${err}`);
  });
