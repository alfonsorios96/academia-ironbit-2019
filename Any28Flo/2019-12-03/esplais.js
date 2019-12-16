//function declaration
Array.prototype.esplais = function( index , ...itemsToAdd){
 let indexi = index;
 let arrayFilter= [];
 let arraySplice =[]
 for (let i = 0 ; i <= indexi ; i++){
     if(i != indexi){
         arrayFilter.push(this[i])
     }else{
         arraySplice.push(this[i])
     }
 }
   return `${arrayFilter} , ${itemsToAdd}, ${arraySplice}`
};
