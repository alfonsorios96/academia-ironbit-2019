class Employee {
  constructor (idEmployee, nameEmployee, freeTime, hoursWork ) {
    this.idEmployee = idEmployee,
    this.nameEmployee = nameEmployee,
    this.freeTime = freeTime,
    this.hoursWork = hoursWork

  }
}

class Teacher extends Employee {
  constructor (typeTeacher){
    super();
    this. typeTeacher = typeTeacher;

    if(typeTeacher === 'plaza'){
      this.idEmployee = this.idEmployee,
      this.nameEmployee = this.nameEmployee,
      this.hoursWork = 50,
      this.freeTime = 15


    }
    if(typeTeacher === 'contrato'){
      this.idEmployee = this.idEmployee,
      this.nameEmployee = this.nameEmployee,
      this.hoursWork = 20,
      this.freeTime = 5
      }
    }
  }

  class Admin extends Employee{
    constructor(typeTeacher){
      super();
      this.typeTeacher = 'admin'
      this.idEmployee = this.idEmployee,
      this.nameEmployee = this.nameEmployee,
      this.hoursWork = 20,
      this.freeTime = 5
    }
  }

  addEmployee = (typeTeacher, idEmployee) => {
    switch (typeTeacher) {
      case 'admin':
        return returnArray = Array.from({length: idEmployee}, () => new Admin(typeTeacher)); 
        break;
      case 'plaza': 
      return returnArray =  Array.from({length: idEmployee}, () => new Teacher(typeTeacher));
      case 'contrato': 
      return returnArray =  Array.from({length: idEmployee}, () => new Teacher(typeTeacher));
        break; 
        return "error: no se puede generar";
      default:
    }
  }

