import Employee from './Employee.js';

class School {
    constructor() {
        Object.defineProperty(this, 'teachers', {value: [
            new Employee('Fernando', 15, 20),
            new Employee('Mar', 0, 30),
            new Employee('Luis', 5, 0),
        ], writable: false});
        Object.defineProperty(this, 'responsabilities', {value: ['Teach', 'Break', 'Meeting', 'Administrative Duties'], writable: false});
    }
}

export default School;