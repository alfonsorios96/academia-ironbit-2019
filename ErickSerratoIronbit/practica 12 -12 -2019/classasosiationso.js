class Animal {
  constructor(Type, Gender, Color, Age,){
    this.Type = Type;
    this.Gender = Gender;
    this.Color = Color;
    this.Age = Age;

  }
  Task = new Task ();
}

class Pet extends Animal {
  constructor (Animal, Name){
    this.Animal = new Animal();
    this.Name = this.Name;

  }

}

class Student {
  constructor (School, Grade, Id_Student, Tittle){
    this.School = School;
    this.Grade = Grade ;
    this.Id_Student = Id_Student;
    this.Tittle = Tittle;

  }
  
}

class Human {
  constructor(Name, Age, Nacionality){
    this.Name = Name;
    this.Age = Age;
    this.Nacionality =  Nacionality;
  }

    Student = new Student ();
    Pet = new Pet ();
    Family = new Family();


}

class Family {
  constructor (Father, Mother, Brother, GranFhather, GranMother, Sister,Son, Daugter){
    this.Father = Father;
    this.Mother = Mother;
    this.Brother = Brother;
    this.GranFhather = GranFhather;
    this.GranMother = GranMother;
    this.Sister = Sister;
    this.Son = Son;
    this.Daugter = Daugter;

  }

  Task = new Task();

}

class Task {
  constructor (Star, End){
    this.Star = Star;
    this.End = End;
  }

  Feed (food ){

    let energie = food/3;
    let strong = food/3;
    let fat = food *1;

    if(food >3){
      fat = foot*2;
      energie = food /5;
      strong = food /5;

    }

  }
  Play (Task){
    Task = new Task();
    Task.Star();
    Task.End();

  }
  Work (Task){
    Task = new Task();
    Task.Star();
    Task.End();

  }

  Read (Task){
    Task = new Task();
    Task.Star();
    Task.End();

  }
  Walk(Distans, Time , Velocity, Task){
    if(Velocity >10){
      
    }
    if (Distans >10){

    }

  }

  Study (Task){
    Task = new Task();
    Task.Star();
    Task.End();

  }

  
}