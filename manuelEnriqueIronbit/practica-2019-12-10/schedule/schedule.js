class Employee {
    constructor(totalHrs, workingHrs, freeHrs ){
        this.totalHours = totalHrs;
        this.workingHours = workingHrs;
        this.freeHours = freeHrs;
        this.schedule = [];
    }
}

class Administrative extends Employee{
    constructor(totalHrs, workingHrs, freeHrs){
        super(totalHrs, workingHrs, freeHrs);
        this.schedule = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]
        ] 
    }
}

class Professor extends Employee{
    constructor(totalHrs, workingHrs, freeHrs){
        super(totalHrs, workingHrs, freeHrs);
        this.bonus = false;
    }
}

class ProfessorFixed extends Professor{
    constructor(totalHrs, workingHrs, freeHrs, agesWorked){
        super(totalHrs, workingHrs, freeHrs);
        this.agesWorked = agesWorked;
        this.finalSchedule = [];
        this.daySchedule = [];
    }
    bono(agesWorked){
        let totalBonus = (this.agesWorked / 5);
        if (totalBonus > 0){
            for(let i = 0; i < totalBonus; i++){
                this.workingHours = this.workingHours - (1 * totalBonus);
                this.freeHours = this.freeHours + (1 * totalBonus);
            }
        } 
    }
    buildPlazaSchedule (weekDays, totalHours, classHours, yearsOfAntiguaty) {
        let dailyHoursAvailable = totalHours / weekDays; 
        classHours -= yearsOfAntiguaty / 5;
        this.buildSchedule(classHours, weekDays, dailyHoursAvailable);
    }
    
    buildSchedule (classHours, weekDays, dailyHoursAvailable){
        for (var day = 0 ; day < weekDays ; day++) {
            for (var hour = 0 ; hour < dailyHoursAvailable; hour++) {
                let random = Math.floor(Math.random() * 2);
                this.daySchedule[hour] = random;
               }
            this.finalSchedule.push(this.daySchedule);
            this.daySchedule = [];
        }
        this.validateSettingHours(this.finalSchedule,classHours);
        return this.finalSchedule;
    }
    
    validateSettingHours (finalSchedule, classHours) { 
        let  arryaHoursPerDay = finalSchedule.map( (value) => value.reduce(this.sumOfArray, 0));
        let weekHours = arryaHoursPerDay.reduce(this.sumOfArray, 0);
        let differenceHours = classHours - weekHours;
        if (differenceHours > 0 ){
            this.settingHours(differenceHours,1);
            this.validateSettingHours(finalSchedule,classHours);
        }else if (differenceHours < 0){
            this.settingHours(Math.abs(differenceHours),0);
            this.validateSettingHours(finalSchedule,classHours);
        }
    } 
    
    settingHours (differenceHours, valueToInsert) { 
        let i = 1;
        while(i <= differenceHours){
             let randomDay = Math.floor(Math.random() * this.finalSchedule.length);
            let randomHour = Math.floor(Math.random() * this.finalSchedule[0].length);
             if(this.finalSchedule[randomDay][randomHour] != valueToInsert){
                this.finalSchedule[randomDay][randomHour] = valueToInsert;
                i += 1;
            }
           }
    } 
    
    sumOfArray (sum, num) { 
        return sum + Math.round(num); 
    } 
}

class ProfessorContract extends Professor{
    constructor(totalHrs, workingHrs, freeHrs, weekWorkedHours, bonus = 0){
        super(totalHrs, workingHrs, freeHrs);
        this.weekWorkedHours = weekWorkedHours;
        this.bonus = bonus;
        this.finalSchedule = [];
        this.daySchedule = [];
    }
    bono(weekWorkedHours){
        let totalBonus = (this.weekWorkedHours / 10);
        if(this.weekWorkedHours > 10){
            this.bonus = totalBonus;
        }
    }
    buildContractSchedule (weekDays, totalHours, classHours) {
        let dailyHoursAvailable = totalHours / weekDays; 
        this.buildSchedule(classHours, weekDays, dailyHoursAvailable);
    }
    
    buildSchedule (classHours, weekDays, dailyHoursAvailable){
        for (var day = 0 ; day < weekDays ; day++) {
            for (var hour = 0 ; hour < dailyHoursAvailable; hour++) {
                let random = Math.floor(Math.random() * 2);
                this.daySchedule[hour] = random;
               }
            this.finalSchedule.push(this.daySchedule);
            this.daySchedule = [];
        }
        this.validateSettingHours(this.finalSchedule,classHours);
        return this.finalSchedule;
    }
    
    validateSettingHours (finalSchedule, classHours) { 
        let  arryaHoursPerDay = finalSchedule.map( (value) => value.reduce(this.sumOfArray, 0));
        let weekHours = arryaHoursPerDay.reduce(this.sumOfArray, 0);
        let differenceHours = classHours - weekHours;
        if (differenceHours > 0 ){
            this.settingHours(differenceHours,1);
            this.validateSettingHours(finalSchedule,classHours);
        }else if (differenceHours < 0){
            this.settingHours(Math.abs(differenceHours),0);
            this.validateSettingHours(finalSchedule,classHours);
        }
    } 
    
    settingHours (differenceHours, valueToInsert) { 
        let i = 1;
        while(i <= differenceHours){
             let randomDay = Math.floor(Math.random() * this.finalSchedule.length);
            let randomHour = Math.floor(Math.random() * this.finalSchedule[0].length);
             if(this.finalSchedule[randomDay][randomHour] != valueToInsert){
                this.finalSchedule[randomDay][randomHour] = valueToInsert;
                i += 1;
            }
           }
    } 
    
    sumOfArray (sum, num) { 
        return sum + Math.round(num); 
    } 
}

let manu = new ProfessorContract();
manu.buildContractSchedule(5,20,15);
console.log(manu);