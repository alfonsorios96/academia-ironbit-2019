const options = ["clear", "sunny", "cloudy", "rainy", "windy", "thunderstorms"];

function minUmbrellas(weather) {
    // Debemos de saber si hay o no al menos un paraguas en casa o en oficina, por lo tanto, si esta lloviendo y no tenemos paraguas agregaremos uno nuevo
    let atHome = 0, 
        atOffice = 0;
    const laps = weather.map((forecast, weatherIndex) => {
        // Para determinar si usamos paraguas o no, debemos de comprobar si el clima es 'rainy' o 'thunderstorms'.
        return ({
            clima: weather,
            estado: weatherIndex % 2 === 0 ? 'IDA' : 'VUELTA',
            useAnUmbrella: forecast === 'rainy' || forecast === 'thunderstorms' ? true : false
        });
    });
            
    const umbrellas = laps.reduce((acc, current) => {}, 0);
}
console.log(atHome, atOffice);