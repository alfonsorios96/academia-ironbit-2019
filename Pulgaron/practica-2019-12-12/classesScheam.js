class Human{
    constructor(weight, height, gender){
        this.weight = weight;
        this.height = height;
        this.gender = gender
    }

    eat(){
       
    }

    sleep(){

    }

    talk(){

    }
}

class Student extends Human{
    constructor(name, lastName, id){
        super();
        this.name = name;
        this.lastName = this.lastName;
        this.id = id;
    }

    study(){

    }

    goToSchool(){

    }

    wearBackpack(){

    }
}

class Animal{
    constructor(race, classification, color, age){
        this.race = race;
        this.classification = classification;
        this.color = color;
        this.age = age;
    }

    reproduce(){

    }

    eat(){

    }
}

class Pet extends Animal{
    constructor(owner, name){
        super();
        this.owner = owner;
        this.name = name;
    }

    doThings();
}

class Family {
    constructor(members, lastName){
        this.members = members;
        this.lastName = lastName;
    }

    dinner(){

    }

    hangout(){

    }

    support(){

    }
}

class Task{
    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }

    do(){

    }

    stop(){
        
    }
}