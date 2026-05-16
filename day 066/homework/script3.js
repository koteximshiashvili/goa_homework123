let numbers = [3, 5, 7, 2, 8];
let maxNum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }

console.log(maxNum);
