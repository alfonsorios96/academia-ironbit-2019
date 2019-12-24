
class Ironbit {
    constructor() {//
        this.monday = {
            firstHour: {
                busy: false,
                subjects: 'math'
            },
            secondHour: {
                busy: false,
                subjects: 'esp'
            },
            thirdHour: {
                busy: false,
                subjects: 'sci'
            },
            fourthHour: {
                busy: false,
                subjects: 'phi'
            },
            fifthHour: {
                busy: false,
                subjects: 'math'
            },
            sixthHour: {
                busy: false,
                subjects: 'sci'
            },
            seventhHour: {
                busy: false,
                subjects: 'esp'
            }
        };
        this.twesday = {
            firstHour: {
                busy: false,
                subjects: 'math'
            },
            secondHour: {
                busy: false,
                subjects: 'his'
            },
            thirdHour: {
                busy: false,
                subjects: 'sci'
            },
            fourthHour: {
                busy: false,
                subjects: 'esp'
            },
            fifthHour: {
                busy: false,
                subjects: 'bio'
            },
            sixthHour: {
                busy: false,
                subjects: 'chem'
            },
            seventhHour: {
                busy: false,
                subjects: 'esp'
            }
        };
        this.wednesday = {
            firstHour: {
                busy: false,
                subjects: 'bio'
            },
            secondHour: {
                busy: false,
                subjects: 'esp'
            },
            thirdHour: {
                busy: false,
                subjects: 'phi'
            },
            fourthHour: {
                busy: false,
                subjects: 'sci'
            },
            fifthHour: {
                busy: false,
                subjects: 'esp'
            },
            sixthHour: {
                busy: false,
                subjects: 'math'
            },
            seventhHour: {
                busy: false,
                subjects: 'his'
            }
        };
        this.thursday = {
            firstHour: {
                busy: false,
                subjects: 'phi'
            },
            secondHour: {
                busy: false,
                subjects: 'math'
            },
            thirdHour: {
                busy: false,
                subjects: 'chem'
            },
            fourthHour: {
                busy: false,
                subjects: 'esp'
            },
            fifthHour: {
                busy: false,
                subjects: 'bio'
            },
            sixthHour: {
                busy: false,
                subjects: 'phi'
            },
            seventhHour: {
                busy: false,
                subjects: 'his'
            }
        };
        this.friday = {
            firstHour: {
                busy: false,
                subjects: 'phi'
            },
            secondHour: {
                busy: false,
                subjects: 'math'
            },
            thirdHour: {
                busy: false,
                subjects: 'esp'
            },
            fourthHour: {
                busy: false,
                subjects: 'bio'
            },
            fifthHour: {
                busy: false,
                subjects: 'his'
            },
            sixthHour: {
                busy: false,
                subjects: 'phi'
            },
            seventhHour: {
                busy: false,
                subjects: 'chem'
            }
        };
    }
    // Getter && Setters
    getMonday(){
        return this.monday;
    }
    /*  Siempre se recibira un arreglo de 7 elementos para saber si estan ocupados  */
    setMonday(...Monday){
       /*  this.lunes.firstHour = Monday[0];
        this.lunes.secondHour = Monday[1];
        this.lunes.thirdHour = Monday[2];
        this.lunes.fourthHour = Monday[3];
        this.lunes.fifthHour = Monday[4];
        this.lunes.sixthHour = Monday[5];
        this.lunes.seventhHour = Monday[6]; */
    }
    // Regresa el objeto entero
    getTwesday(){
        return this.twesday;
    }
    setTwesday(...Twesday){
      /*   this.martes.firstHour = Twesday[0];
        this.martes.secondHour = Twesday[1];
        this.martes.thirdHour = Twesday[2];
        this.martes.fourthHour = Twesday[3];
        this.martes.fifthHour = Twesday[4];
        this.martes.sixthHour = Twesday[5];
        this.martes.seventhHour = Twesday[6]; */
    }
    getWednesday(){
        return this.wednesday;
    }
    setWednesday(...Wednesday){
        /* this.miercoles.firstHour = Wendsday[0];
        this.miercoles.secondHour = Wendsday[1];
        this.miercoles.thirdHour = Wendsday[2];
        this.miercoles.fourthHour = Wendsday[3];
        this.miercoles.fifthHour = Wendsday[4];
        this.miercoles.sixthHour = Wendsday[5];
        this.miercoles.seventhHour = Wendsday[6]; */
    }
    getThursday(){
        return this.thursday;
    }
    setThursday(...Thursday){
        /* this.jueves.firstHour = Thursday[0];
        this.jueves.secondHour = Thursday[1];
        this.jueves.thirdHour = Thursday[2];
        this.jueves.fourthHour = Thursday[3];
        this.jueves.fifthHour = Thursday[4];
        this.jueves.sixthHour = Thursday[5];
        this.jueves.seventhHour = Thursday[6]; */
    }
    getFriday(){
        return this.friday;
    }
    setFriday(...Friday){
        /* this.viernes.firstHour = Friday[0];
        this.viernes.secondHour = Friday[1];
        this.viernes.thirdHour = Friday[2];
        this.viernes.fourthHour = Friday[3];
        this.viernes.fifthHour = Friday[4];
        this.viernes.sixthHour = Friday[5];
        this.viernes.seventhHour = Friday[6]; */
    }

    addSubjectsMonday(teacher){
        /*  
        teacher {
            materia: 'math',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.monday) {
            if(this.monday[key].busy === false){
                if(this.monday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.monday[key].busy = true;
                        schedule.push(this.monday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return  schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsThuesday(teacher){
        /*  
        teacher {
            materia: 'math',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.thuesday) {
            if(this.thuesday[key].busy === false){
                if(this.thuesday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.thuesday[key].busy = true;
                        schedule.push(this.thuesday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsWendsday(teacher){
        /*  
        teacher {
            materia: 'math',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.wednesday) {
            if(this.wednesday[key].busy === false){
                if(this.wednesday[key].subjects === teacher.subject)  {
                    if ( hourDay <9){
                        this.wednesday[key].busy = true;
                        schedule.push(this.wednesday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsThursday(teacher){
        /*  
        teacher {
            materia: 'math',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.thursday) {
            if(this.thursday[key].busy === false){
                if(this.thursday[key].subjects === teacher.subject)  {
                    if ( hourDay <8){
                        this.thursday[key].busy = true;
                        schedule.push(this.thursday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    addSubjectsFriday(teacher){
        /*  
        teacher {
            materia: 'math',
            clases: 35
        } */
        let hourDay = 0;
        let schedule = [];
        let hourWork = teacher.hourWork;// Preguntar 
        for (const key in this.friday) {
            if(this.friday[key].busy === false){
                if(this.friday[key].subjects === teacher.subject)  {
                    if ( hourDay <8){
                        this.friday[key].busy = true;
                        schedule.push(this.friday[key]);
                        hourDay++;
                    }else{
                        return schedule;
                    }
                }
            }
        }// Fin de recorrerhour y asignarlas
        return schedule; // Regresa un array con las hour que trabaja ese dia 
    }
    generateSchedule(teacher){
        let monday=  addSubjectsMonday(teacher);
        let thuesday, wednesday, thursday, friday;
        let scheadule = new Map();
        scheadule.set(mon, monday);
        if(monday.lenght <teacher.hourWork){
             thuesday = addSubjectsThuesday(teacher);
             scheadule.set(thu, thuesday);
        }else{

        }
        if(thuesday.lenght < teacher.hourWork){
            wednesday = addSubjectsWendsday(teacher);
            scheadule.set(wed, wednesday);
        }else{

        }
        if(wednesday.lenght < teacher.hourWork){
         thursday = addSubjectsThursday(teacher);
         scheadule.set(thurs, thursday);
        }else{

        }
        if(thuesday.lenght < teacher.hourWork){
         friday  = addSubjectsFriday(teacher);
         scheadule.set(fri, friday);
        }
        return scheadule;
    }




}
class Employee {
     constructor( name, years){
         this.name = name;
         this.years = years;
     }
}
class Teacher extends Employee{
    constructor (name, subjects, years){
        super(name, years);
        this.subjects = subjects;
    }
}
class teacherPlace extends Teacher{
    constructor ( name,  subjects, years){
        super( name, subjects, years);
        this.hourT = 50;
        this.hourL = 15;
        this.numClass = 35;
    }
    datos(){
        let hourExtra = 0;
        if(this.years>= 5){
             hourExtra = parseInt((this.years)/5);
        }
        let profe = {
            subjects : this.subjects,
            hourWork : this.hourT - this.hourL -hourExtra
        }
        return teacher;
    }
}
class teacherContrato extends teacher{
    constructor ( name, subjects, years){
        super( name, subjects, years);
        this.hourT = 20;
        this.numClass = 15;
        this.hourL = 5;
    }
}
class Administrative extends Employee {
    constructor(name, years){
        super(name, years);
        this.hourT = 45;
        this.hourL=5;
    }
}
// var prueba = new Ironbit('test');
// console.log(prueba.horario);