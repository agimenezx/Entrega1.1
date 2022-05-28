/* Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no. */

function getPromise() {
  return new Promise((res, rej) => {
    let myPhone = {
      name:"Iphone",
      year:"2022"
    };
    if (myPhone.year === "2022") {
      res(`Producte satisfactori, tens un bon mòbil ${myPhone.name} 👌`);
    } else {
      rej(`Fracàs absolut,el teu ${myPhone.name} és mòbil antic 😜`);
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

  
