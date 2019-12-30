class Animal{
    constructor(){
        this.animalGroup = '';
        this.race = '';
        this.gender = '';
        this.birthPlace = '';
        this.age = '';
    }
    breed(){
        return 'New animal'
    }
    sleep(){
        return 'ZzzzZzzz'
    }
    eat(){
        return 'Yum yum'
    }
}

class Human extends Animal{
    constructor(){
        super();
        this.name = '';
        this.height = '';
        this.weight = '';
        this.bloodGroup = '';
        this.family = '';
    }
    think(topic){
        return `Todays topic is ${topic}`
    }
}

class Family{
    constructor(){
        this.numberOfMembers = '';
        this.familyTree = {};
    }
    getTogether(who){
        return `${who} gets drunk`
    }
}

class Student extends Human{
    constructor(){
        this.assignedSchool = '';
        this.notes = {};
        this.registrationTag = '';
        this.subjects = '';
    }
    study(subject){
        return `Getting smartes about ${subject}`
    }
}

class Pet extends Animal{
    constructor(){
        name = '';
        color = '';
        subrace = '';
    }
    play(){
        return 'Playing with toys'
    }
    destory(object){
        return `It's destroyin the ${object}`
    }
    escape(){
        return 'Run away'
    }
    doTrick(){
        return 'Make my owers laugh'
    }
}

class Task{
    constructor(){
        this.name = '';
        this.schedule = [];
    }
}