function createPhoneNumber(numbers){
    return numbers.reduce((accumulator, currentValue, index) => {
        if (index === 0) return `${accumulator}(${currentValue}`;
        if (index === 2) return `${accumulator}${currentValue}) `;
        if (index === 3) return `${accumulator}${currentValue}`;
        if (index === 5) return `${accumulator}${currentValue}-`;
        return `${accumulator}${currentValue}`;
    }, "");
}