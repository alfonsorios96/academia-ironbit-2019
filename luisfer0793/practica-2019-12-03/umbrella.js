const options = ["clear", "sunny", "cloudy", "rainy", "windy", "thunderstorms"];

const minUmbrellas = weather => {
    // Caso que NO llueva.
    if ( !(weather.includes('rainy') || weather.includes('thunderstorms')) ) {
        return 0;
    }
    // Caso que TODOS los días llueva.
    if (weather.every(current => current === 'rainy' || current === 'thunderstorms')) {
        return 1;
    }
    // Caso que llueva en ALGÚN día.
    let atHome = 1, atOffice = 1;
}
console.log(minUmbrellas(every));