//let array = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2],[4,5,6,7,8,9,1,2,3],[5,6,7,8,9,1,2,3,4],[6,7,8,9,1,2,3,4,5],[7,8,9,1,2,3,4,5,6],[8,9,1,2,3,4,5,6,7],[9,1,2,3,4,5,6,7,8]];

module.exports = ( array )=>{
    for (const iterator of array) {
        let p = iterator;
        let P = new Set(p);
        if(P.size!==9)
            return false;    
    }
    for (const keyP in array) {
        for (const key in array[keyP]) {

            if(array[0][key] === array[keyP][key]  && keyP>0){
                return false;
            }
        }
    }
    let arSe = new Set();
    

     for(let b=0; b<3; b++){
         
        arSe.add(array[0][b]);
        arSe.add(array[1][b]);
        arSe.add(array[2][b]);
     }   
     if(arSe.size !== 9){
        return false;
        } 
        arSe.clear();
        for(let b=3; b<6; b++){
         
            arSe.add(array[0][b]);
            arSe.add(array[1][b]);
            arSe.add(array[2][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=6; b<9; b++){
         
            arSe.add(array[0][b]);
            arSe.add(array[1][b]);
            arSe.add(array[2][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=0; b<3; b++){
         
            arSe.add(array[3][b]);
            arSe.add(array[4][b]);
            arSe.add(array[5][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=3; b<6; b++){
         
            arSe.add(array[3][b]);
            arSe.add(array[4][b]);
            arSe.add(array[5][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=6; b<9; b++){
         
            arSe.add(array[3][b]);
            arSe.add(array[4][b]);
            arSe.add(array[5][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=0; b<3; b++){
         
            arSe.add(array[6][b]);
            arSe.add(array[7][b]);
            arSe.add(array[8][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=3; b<6; b++){
         
            arSe.add(array[6][b]);
            arSe.add(array[7][b]);
            arSe.add(array[8][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
        for(let b=6; b<9; b++){
         
            arSe.add(array[6][b]);
            arSe.add(array[7][b]);
            arSe.add(array[8][b]);
         }   
         if(arSe.size !== 9){
            return false;
        } 
        arSe.clear();
  return true;

}
