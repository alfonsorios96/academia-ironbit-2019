const options = ["clear", "sunny", "cloudy", "rainy", "windy", "thunderstorms"];

const minUmbrellas = weather => {
    if ( !(weather.includes('rainy') || weather.includes('thunderstorms')) ) {
        return 0;
    }
    if (weather.every(current => current === 'rainy' || current === 'thunderstorms')) {
        return 1;
    }
    let atHome = 0, atOffice = 0;
    return weather.reduce((accumulator, current, index) => {
        if (index % 2 === 0) {
            if (atOffice === 0) {
                atOffice++;
                return accumulator++;
            }
        }
        else {
            if (atHome === 0) {
                atHome++;
                return accumulator++;
            }
        }
    }, 0);
}