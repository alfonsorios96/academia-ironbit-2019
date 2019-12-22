class Human{
    constructor(weight, height, gender){
        this.weight = weight;
        this.height = height;
        this.gender = gender
    }

    getWeight(){
       return this.weight;
    }

    getHeight(){
        return this.height;
    }

    getGender(){
        return this.gender;
    }
}

class Student extends Human{
    constructor(name, lastName, id){
        super();
        this.name = name;
        this.lastName = lastName;
        this.id = id;
    }

    getName(){
        return this.name;
    }

    getLastName(){
        return this.lastName;
        
    }

    getId(){
        return this.id;
    }
}

class Animal{
    constructor(race, classification, color, age){
        this.race = race;
        this.classification = classification;
        this.color = color;
        this.age = age;
    }

    getRace(){
        return this.race;
    }

    getClassification(){
        return this.classification;
    }
    
    getColor(){
        return this.color;
    }
    
    getAge(){
        return this.age;
    }
}

class Pet extends Animal{
    constructor(owner, name){
        super();
        this.owner = owner;
        this.name = name;
    }

    getOwner(){
        return this.owner;
    };
    
    getName(){
        return this.name;
    }
}

class Family {
    constructor(members, lastName){
        this.members = members;
        this.lastName = lastName;
    }
    
    getMembers(){
        return this.members;
    }
    
    getLastName(){
        return this.lastName;
    }
}

class Task{
    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }

    getTaskName(){
        return this.name;
    }
    
    getDuration(){
        return this.duration;
    }
}