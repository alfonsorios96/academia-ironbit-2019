import Empleado from './Empleado.js';

class Escuela {
    constructor() {
        Object.defineProperty(this, 'teachers', {value: [
            new Empleado('Fernando', 15, 20),
            new Empleado('Mar', 0, 30),
            new Empleado('Luis', 5, 0),
        ], writable: false});
        Object.defineProperty(this, 'responsabilities', {value: ['Teach', 'Break', 'Meeting', 'Administrative Duties']});
    }
}



const miEscuela = new Escuela();


miEscuela.teachers.forEach(empleado => console.log(empleado.isBusy()));