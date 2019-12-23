    const letterM = (array) => {
        for ( let i = 0; i<array.length; i++){
            if(array[i].length >1)
                return 'Estas introduciendo letras de mas';
                else if(!isNaN(array[i]))
                return 'Alguno no  pertenece al "abecedario"';
        }
     
        if( array.length >=26){
            return('El abecedario esta completo');
        }
        let mayus = false;
        let min = '';
        if(array[0].charCodeAt(0) >=65 && array[0].charCodeAt(0) <= 90  ){
            mayus = true;
            let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            let first = abc.indexOf(array[0]);
            let tamUser = array.length;
            let comp = abc.splice(first, (tamUser));
            let letra = comp.filter((item, index)=> {
                if(item === array[index]){
                    return false;
                }else{
                return true;
                }
            });
        
        return   letra[0]  ;
            
        }
        let abc = "abcdefghijklmnopqrstuvwxyz".split('');
        let first = abc.indexOf(array[0]);
        let tamUser = array.length;

        let comp = abc.splice(first, (tamUser));
        

        let letter = comp.filter((item, index)=> {
            if(item === array[index]){
                return false;
            }else{
            return true;
            }
        });
        
        return   letter[0]  ;
        
    }

    module.exports =  letterM;