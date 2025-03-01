/* Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no. */

function getPromise() {
  return new Promise((res, rej) => {
    let myPhone = {
      name: "Iphone",
      year: "2022",
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

/* - Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre 
(que s'imprimirà per consola) en funció del paràmetre rebut. */

//Sense arrow function
/* function calculate(num1, callbackFunction) {
  return callbackFunction(num1);
}
function doubleNumber(num1) {
  return num1 * 2;
}
console.log(calculate(10, doubleNumber));
 */
const calculate = (num1, callbackFunction) => {
  return callbackFunction(num1);
};

const doubleNumber = (num1) => {
  return num1 * 2;
};

console.log(calculate(10, doubleNumber));

/* Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise 
efectuant la cerca en l'objecte pel seu id. */

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (employeesId) => {
  return new Promise((res, rej) => {
    let foundEmployee = employees.find((element) => element.id == employeesId);
    if (foundEmployee) {
      res(`El nom del teu empleat és ${foundEmployee.name}`);
    } else {
      rej(`No existeix cap persona`);
    }
  });
};
getEmployee(2)
  .then((message1) => {
    console.log(`Aquí tens"😀 ${message1}`);
  })
  .catch((err) => {
    console.log(`Error:😱😱😱 ${err}`);
  });

/* - Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee 
i retorni el seu salari. */

const getSalary = (employee) => {
  return new Promise((res, rej) => {
    let totalSalary = salaries.find((element) => element.id == employee);
    if (totalSalary) {
      res(`El teu salari és ${totalSalary.salary}`);
    } else {
      rej(`No existeix cap salari`);
    }
  });
};
getSalary(4)
  .then((message2) => {
    console.log(`Aquí tens"😀 ${message2}`);
  })
  .catch((err) => {
    console.log(`Error:😱😱😱 ${err}`);
  });

/* - Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
de manera que es retorni per la consola el nom de l'empleat i el seu salari.
 */

getEmployee(2)
  .then((message1) => {
    getSalary(2)
    .then((message2)=>{
      console.log (`${message1.name} ${message2.salary}`)
    })
  })

//No sé el motiu pel qual falla, surt undefined!!!
