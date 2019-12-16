const weater = ["sunny","clear","sunny","sunny","clear","clear","sunny","rainy","clear","clear","windy","clear","clear","windy","sunny","clear","cloudy","clear","clear","sunny","sunny","rainy","thunderstorms","sunny","clear","windy","thunderstorms","windy","windy","clear","windy","clear","clear","clear","windy","clear","windy","sunny","windy","clear","windy","sunny","sunny","sunny","windy","sunny","sunny","sunny","windy","windy","sunny","sunny","rainy","thunderstorms","rainy","rainy","clear","windy","windy","thunderstorms","windy","clear","windy","clear","sunny","windy","cloudy","sunny","clear","clear","clear","sunny","cloudy","clear","windy","rainy","windy","clear","clear","sunny","sunny","sunny","sunny","cloudy","clear","clear","sunny","windy","windy","windy","thunderstorms","windy","windy","clear","thunderstorms","sunny","sunny","sunny","sunny","clear"];

const numumbrellas =(weater) =>{
  let totalnumberumbrellashome = 0;
  let totalnumberumbrellaswork = 0;
  let totalumbrellas = 0;

  weater.reduce((totalumbrellas, weaters, index  ) => {
    if(weaters === "rainy" || weaters === "thunderstorms" ){

      if(index %2 ===0 ){
        totalnumberumbrellashome +=1;
        totalumbrellas +=1;
      }else{
        totalnumberumbrellaswork +=1;
        totalumbrellas +=1;
      }

    }
    return totalumbrellas;
  })

}