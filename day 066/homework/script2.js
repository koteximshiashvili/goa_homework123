function Multiply(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const multiplied = numbers[i] * 3;

        if (multiplied > 20) {
            result.push(multiplied);
        }
    }

    return result;
}

const numbers = [1, 2, 4, 10, 6];
const result = Multiply(numbers);
console.log(result);
