const primes = (a, n) => {
    const numbers = [];
    for (let i = a; i <= n; i++) {
        numbers.push(i);
    }
    return numbers.filter(number => {
        // Para que un numero sea primo, debe de tener dos divisores, el uno y el numero mismo.
        let divisores = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisores++;
            }
        }
        return divisores === 2;
    });
};

console.log(primes(100, 200));