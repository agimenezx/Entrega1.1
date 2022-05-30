/* Nivell 1
- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari,
 usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
 */
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
  getEmployee()
    .then((message1) => {
      console.log(`Aquí tens"😀 ${message1}`);
    })
    .catch((err) => {
      console.log(`Error:😱😱😱 ${err}`);
    });
  
  
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
  getSalary()
    .then((message2) => {
      console.log(`Aquí tens"😀 ${message2}`);
    })
    .catch((err) => {
      console.log(`Error:😱😱😱 ${err}`);
    });


   /*  async function resultEmployee(employeeId) {
        try {
          const elementEmployees = await getEmployee(employeeId);
          const elementSalarys = await getSalary(elementEmployees);
          console.log(
            `${elementEmployees.name} has a salary of ${elementSalarys.salary}`
          );
        } catch (error) {
          console.log("Error");
        }
      }
      resultEmployee(2); */