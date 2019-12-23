'use strict'
let result = ( start, finish) =>{
    let resP = [];
    let divisores = [2,3,5,7];
    let contDiv = 0;
    for( let i = start; i<=finish; i++){
        for( let j = 0; j<divisores.length; j++){
            if( i === 1){
                contDiv ==
            } else if(i === 2 || i === 3 || i === 5 || i === 7){
                contDiv = 0;
                
             }else if ( i%divisores[j] === 0){
                contDiv++;
                let prov =  i/divisores[j];
                if( (prov % divisores[j] ) === 0){
                    contDiv++;
                }
            }   
        }//FIn de recorrido de divisores
        if( contDiv === 0 ){
            resP.push(i);
        }
        contDiv = 0;
    } // Fin de recorrido de numeros

    return resP;
}

console.log(result(100, 200));
