let umbrellas = (array) => {
    let umbrellasHouse = 0;
    let umbrellasJob = 0;
   for(let i = 0; i < array.length; i++){
        if( i%2 === 0 ){
             
            if(array[i] === 'rainy' || array[i] === 'cloudy' ){
                
                if( umbrellasHouse === 0)
                   umbrellasJob++;
                else if ( umbrellasHouse > 0){
                    umbrellasJob++;
                    umbrellasHouse--;
                }
            }
        }else if( i%2 > 0){
            
            if(array[i] === 'rainy' || array[i] === 'cloudy'){
                
                if( umbrellasJob === 0)
                    umbrellasHouse++;
                    else if( umbrellasJob > 0 ){
                        umbrellasHouse++;
                        umbrellasJob--;
                    }
            }
        }
   } 

   return (umbrellasHouse + umbrellasJob);
}


module.exports = umbrellas;