class Family {
    constructor(lastName, blood) {
        this.lastName = lastName;
        this.blood = blood;
        this.tree = [];
    }
    addMember (member){   
        this.tree.push(member);
    }
}
class Human extends Family{
    constructor (lastName, blood,sex, age, name ){
        super(lastName, blood);
        this.sex = sex;
        this.age = age;
        this.name = name;
        this.tasksHuman = [];
        this.petsHuman = [];
    }
    addPet(type = 'quadruped', agressive =false, age = 0, petHouse= false){
        this.petsHuman.push(Pet.addToPropertys(type, agressive, age, petHouse));
    }
     static addToFamilyFromHuman(){
        let nHuman = new Human(lastName, blood,sex, age, name);
        return nHuman;
    }
    addTask(who, description){
        this.tasksHuman.push( Task.addTask(who, description ) );
     }
    
}
class Student extends Human {
    constructor(lastName, blood,sex, age, name, school) {
        super(lastName, blood,sex, age, name);
        this.school = school;
        this.tasksStudent = [];
        this.pets = [];
    }
    addTask(who, description){
        this.tasksStudent.push( Task.addTask(who, description ) );
     }
    addPet(type = 'quadruped', agressive =false, age = 0, petHouse= false){
        this.pets.push(Pet.addToPropertys(type, agressive, age, petHouse));
    }
     static addToFamilyFromStudet(lastName, blood,sex, age, name, school){ // No se puede estatico por que requiere hacer referencia para que envie sus datos
        let studentN = new Student(lastName, blood,sex, age, name, school);
        return studentN;
    }
}

class Animal {
    constructor(type = 'quadruped', agressive ='false', age = '0' ) {
        this.type = type;
        this.agressive = agressive;
        this.age = age;
    }
}

class Pet {
    constructor(type = 'quadruped', agressive =false, age = 0, petHouse) {
        super(type, agressive, age);
        this.petHouse  = petHouse;
        this.taskPet = [];
    }
      addTask(who, description){
        this.taskPet.push( Task.addTask(who, description ) );
     }
     showTasks(){
         return this.taskPet;
     }
      static addToPropertys(type = 'quadruped', agressive =false, age = 0, petHouse= false){
         let pet = new Pet( type,agressive,age,petHouse  );
         return pet;
     }

}

class Task {
    constructor(who, description) {
        this.ref =who;
        this.description = description;
    }
    static addTask(who, description){
        let taskP = new Task(who, description);
        return taskP;
    }
}
