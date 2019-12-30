const primes = (start, end) => {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers.filter(number => {
        let dividers = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                dividers++;
            }
        }
        return dividers === 2;
    });
};