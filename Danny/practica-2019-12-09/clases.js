
class Ironbit {
    constructor() {
        this.lunes = {
            firstHour: {
                ocupado: false,
                asignatura: ''
            },
            secondHour: {
                ocupado: false,
                asignatura: ''
            },
            thirdHour: {
                ocupado: false,
                asignatura: ''
            },
            fourthHour: {
                ocupado: false,
                asignatura: ''
            },
            fifthHour: {
                ocupado: false,
                asignatura: ''
            },
            sixthHour: {
                ocupado: false,
                asignatura: ''
            },
            seventhHour: {
                ocupado: false,
                asignatura: ''
            }
        };
        this.martes = {
            firstHour: {
                ocupado: false,
                asignatura: ''
            },
            secondHour: {
                ocupado: false,
                asignatura: ''
            },
            thirdHour: {
                ocupado: false,
                asignatura: ''
            },
            fourthHour: {
                ocupado: false,
                asignatura: ''
            },
            fifthHour: {
                ocupado: false,
                asignatura: ''
            },
            sixthHour: {
                ocupado: false,
                asignatura: ''
            },
            seventhHour: {
                ocupado: false,
                asignatura: ''
            }
        };
        this.miercoles = {
            firstHour: {
                ocupado: false,
                asignatura: ''
            },
            secondHour: {
                ocupado: false,
                asignatura: ''
            },
            thirdHour: {
                ocupado: false,
                asignatura: ''
            },
            fourthHour: {
                ocupado: false,
                asignatura: ''
            },
            fifthHour: {
                ocupado: false,
                asignatura: ''
            },
            sixthHour: {
                ocupado: false,
                asignatura: ''
            },
            seventhHour: {
                ocupado: false,
                asignatura: ''
            }
        };
        this.jueves = {
            firstHour: {
                ocupado: false,
                asignatura: ''
            },
            secondHour: {
                ocupado: false,
                asignatura: ''
            },
            thirdHour: {
                ocupado: false,
                asignatura: ''
            },
            fourthHour: {
                ocupado: false,
                asignatura: ''
            },
            fifthHour: {
                ocupado: false,
                asignatura: ''
            },
            sixthHour: {
                ocupado: false,
                asignatura: ''
            },
            seventhHour: {
                ocupado: false,
                asignatura: ''
            }
        };
        this.viernes = {
            firstHour: {
                ocupado: false,
                asignatura: ''
            },
            secondHour: {
                ocupado: false,
                asignatura: ''
            },
            thirdHour: {
                ocupado: false,
                asignatura: ''
            },
            fourthHour: {
                ocupado: false,
                asignatura: ''
            },
            fifthHour: {
                ocupado: false,
                asignatura: ''
            },
            sixthHour: {
                ocupado: false,
                asignatura: ''
            },
            seventhHour: {
                ocupado: false,
                asignatura: ''
            }
        };
    }
    // Getter && Setters
    getLunes(){
        return this.lunes;
    }
    /*  Siempre se recibira un arreglo de 7 elementos para saber si estan ocupados  */
    setLunes(...Monday){
        this.lunes.firstHour = Monday[0];
        this.lunes.secondHour = Monday[1];
        this.lunes.thirdHour = Monday[2];
        this.lunes.fourthHour = Monday[3];
        this.lunes.fifthHour = Monday[4];
        this.lunes.sixthHour = Monday[5];
        this.lunes.seventhHour = Monday[6];
    }
    // Regresa el objeto entero
    getMartes(){
        return this.martes;
    }
    setMartes(...Twesday){
        this.martes.firstHour = Twesday[0];
        this.martes.secondHour = Twesday[1];
        this.martes.thirdHour = Twesday[2];
        this.martes.fourthHour = Twesday[3];
        this.martes.fifthHour = Twesday[4];
        this.martes.sixthHour = Twesday[5];
        this.martes.seventhHour = Twesday[6];
    }
    getMiercoles(){
        return this.miercoles;
    }
    setMiercoles(...Wendsday){
        this.miercoles.firstHour = Wendsday[0];
        this.miercoles.secondHour = Wendsday[1];
        this.miercoles.thirdHour = Wendsday[2];
        this.miercoles.fourthHour = Wendsday[3];
        this.miercoles.fifthHour = Wendsday[4];
        this.miercoles.sixthHour = Wendsday[5];
        this.miercoles.seventhHour = Wendsday[6];
    }
    getJueves(){
        return this.jueves;
    }
    setJueves(...Thursday){
        this.jueves.firstHour = Thursday[0];
        this.jueves.secondHour = Thursday[1];
        this.jueves.thirdHour = Thursday[2];
        this.jueves.fourthHour = Thursday[3];
        this.jueves.fifthHour = Thursday[4];
        this.jueves.sixthHour = Thursday[5];
        this.jueves.seventhHour = Thursday[6];
    }
    getViernes(){
        return this.viernes;
    }
    setViernes(...Friday){
        this.viernes.firstHour = Friday[0];
        this.viernes.secondHour = Friday[1];
        this.viernes.thirdHour = Friday[2];
        this.viernes.fourthHour = Friday[3];
        this.viernes.fifthHour = Friday[4];
        this.viernes.sixthHour = Friday[5];
        this.viernes.seventhHour = Friday[6];
    }

    asignaClasesLunes(profesor){
        let horasDia = 0;
        let horasTrabajo = profesor.horasTrabajo;
        for (const key in this.lunes) {

           for (const keyU in this.lunes[key]) {
               this.lunes[key][keyU]{}
           }// Fin de recorrer la vista de las horas 
        }// Fin de recorrerhoras
    }

}
class Empleado {
     constructor( name, años){
         this.name = name;
         this.años = años;
     }
}
class Profesor extends Empleado{
    constructor (name, materias, años){
        super(name, años);
        this.materias = [...materias];
    }
}
class ProfesorPlaza extends Profesor{
    constructor ( name,  materias, años){
        super( name, materias, años);
        this.horasT = 50;
        this.horasL = 15;
        this.numClases = 35;
    }
    datos(){
        let horasLibreExtra = 0;
        if(this.años>= 5){
             horasLibreExtra = parseInt((this.años)/5);
        }
        let profe = {
            materias :  [...this.materias],
            horasTrabajo : this.horasT - this.horasL -horasLibreExtra,
        }
        return profe;
    }
}
class ProfesorContrato extends Profesor{
    constructor ( name, materias, años){
        super( name, materias, años);
        this.horasT = 20;
        this.numClases = 15;
        this.horasL = 5;
    }
}
class Administrativos extends Empleado {
    constructor(name, años){
        super(name, años);
        this.horasT = 45;
        this.horasL=5;
    }
}
// var prueba = new Ironbit('test');
// console.log(prueba.horario);