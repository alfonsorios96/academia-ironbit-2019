
const supportmessage = (distan) =>{

  let message;
  

if(distan ===0 ){
  message = {message1 :'Starting Line... Good Luck!'}
}else{
  if( distan > 0  && distan <=2.40){
    message = {Swim  : distan }
  }else{
    if( distan > 2.40  && distan <114.4){
      message = {Bike  : distan }

    }else{
      if(distan >114.4 && distan < 140.6){

        if(distan >130.4 && distan < 140.6)
        {
          message = {Run  : 'Nearly there!' }
        }else{
          message = {Run  : distan }
        }  
      }else{
        message = {message2 :'Distance out of range youre done'}
      }
    }
  }
}


return message;

}

