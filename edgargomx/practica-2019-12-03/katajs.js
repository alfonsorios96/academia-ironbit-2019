const reducenumber =(number) =>{

  let numberofnumer = number.length;
  let numberonecifre = 0;
  let numbercontinue = 0;
  
  let substrimnumber = (numberofnumer, number) =>{
    let numberplus = 0;
    if(numberofnumer !== 1){

      for (let i =0 ; numberofnumer-1; i++){
        numberonecifre += number.substr(i,numberofnumer);
      }
      return numberonecifre;
    }
  } 
  if (substrimnumber.length !== 1){
    substrimnumber (numberofnumer,numberonecifre);
  }else{
    return numberonecifre;
  }
}