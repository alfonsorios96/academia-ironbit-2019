const primeGenerator  = (head, tail) =>{
    let primeArray= [];
    for (let counter = head; counter <= tail; counter++) {
        let notPrime = false;
        for (let i = 2; i <= counter; i++) {
            if (counter %i ===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            primeArray.push(counter)
        }
    }
    return primeArray;
}

console.log(primeGenerator(100, 150));