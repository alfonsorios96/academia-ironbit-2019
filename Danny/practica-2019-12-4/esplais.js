'use strict'

Array.prototype.esplais = function( index, numDelete=0, ...itemsForAdd) {
    var primerA = new Array();
    var segundoA = new Array();
    var tercerA = new Array();
    if(isNaN(numDelete) || isNaN(index)) {
        return `Sintax Error en ${numDelete} is not a Number`;
    }
    if(  index < 0 ){
        return 'Sintax Error, no se permite indice negativo';
    }
    if(numDelete === 0){
        return [...this , ...itemsForAdd];
    }
    if(numDelete < 0){
        if( (numDelete*-1) > index ){
            return 'No es posible borrar esos elementos';
        }
        primerA = this.slice(0,index + numDelete );
        segundoA = this.slice(index, this.length );
        return [...primerA, ...segundoA, ...itemsForAdd];
    }
    if(numDelete > 0 && numDelete<(this.length - index) ) {
        primerA =  this.slice(0, index);  
        segundoA = this.slice(index+1, this.length ); 
        console.log(segundoA);
            if(itemsForAdd.length>0) {
                return tercerA = [...primerA, ...segundoA ,...itemsForAdd];
            }else if( itemsForAdd.length === 0){
                return [...primerA, ...segundoA];
            }
            else if(numDelete>= (this.length - index)){
                return [...primerA, ...itemsForAdd];
            }
    }

}
// Uso y prueba del Splice
var arrP = [1,2,3,4];
var res = new Array();
var agregar = [2, 4, 6];

//res = arrP.esplais( 2, 1,     5,6,7,7,8); // cuando se corta un segmento y se añaden elementos  F
res = arrP.esplais( 2, -31, 5,6); //Cuando el numero de borrar es negativo va al reves R = [ 1 3 4 5 6]  F 
//res = arrP.esplais( 2, 1 ); // cuando no agregas elementos al nuevo arreglo R = [1 2 4] F
//res = arrP.esplais( -2, 1, 1,2,1,2); // cuando el index es negativo se va a la goma // F
//res = arrP.esplais( 2, 0, ...agregar ); // cuando no borras ninguno   F
// Resultado  [ 1, 2, 4, 5, 6, 7, 7, 8 ]
console.log(res);




/*  Segundo Codigo 
        for(var i = 1; i<=numDelete;  i++ ){
               this.pop();
            }
      */