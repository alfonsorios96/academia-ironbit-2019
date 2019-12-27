class Employee {
    constructor(name, availableTime, unavailableTime) {
        Object.defineProperty(this, 'name', {value: name, writable: false});
        Object.defineProperty(this, 'availableTime', {value: availableTime, writable: false});
        Object.defineProperty(this, 'unavailableTime', {value: unavailableTime, writable: false});
    }

    isBusy() {
        return !this.availableTime;
    }
}

export default Employee;