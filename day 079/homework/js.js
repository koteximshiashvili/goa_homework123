function countArea(a, b = null, c = null) {
    if (b !== null && c === null) {
        return a * b;
    }
    else if (b === null && c === null) {
        return Math.PI * a ** 2;
    }
    else if (b !== null && c !== null) {
        return (a * b) / 2;
    }
}

console.log(countArea(5, 10));
console.log(countArea(7));
console.log(countArea(6, 4));
