
const readline = require('readline');

class Factor {
    constructor() { }

    static isPrime(number) {
        if (number <= 1)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i == 0)
                return false;
        return true;
    }

    factorType(number, callback) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                if (number / i === i) {
                    count++;
                } else {
                    count += 2;
                }
            }
        }

        const result = {
            number: number,
            factors: count,
            type: count % 2 === 0 ? "even" : "odd",
            prime: Factor.isPrime(number)
        };

        callback(result);
    }
}

const factorChecker = new Factor();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (number) => {
    factorChecker.factorType(parseInt(number), (result) => {
        console.log(`Number: ${result.number}`);
        console.log(`Number of factors: ${result.factors}`);
        console.log(`Type of factors: ${result.type}`);
        console.log(`Is prime: ${result.prime}`);
        rl.close();
    });
});
