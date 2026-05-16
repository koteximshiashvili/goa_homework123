const search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(nums[mid] == target) return true
        if(nums[mid] < target) start = mid + 1
        else end = mid - 1
    }
    return false
};

console.log(search([1,2,3,4,56,78,7654], 78));

// binary search არის უფრო სწრაფი რადგან ყოველ იტერაციაზე გამორიცხავს ელემენტებს

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] == target) return mid
        if(nums[mid] < target) start = mid + 1
        else end = mid - 1
    }
    return start
};

console.log(searchInsert([1,2,3,4], 5))

var missingNumber = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start
};

console.log(missingNumber([0,1,2,4,5]))

function reverse_binary_search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
console.log(reverse_binary_search([9,8,7,6,5,4], 5))

function guessTheNumberGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let low = 1;
    let high = 100;

    while (true) {
        let guess = Math.floor((low + high) / 2);
        console.log(guess);

        if (guess === target) {
            console.log('correct');
            break;
        } else if (guess < target) {
            console.log("higher");
            low = guess + 1;
        } else {
            console.log("lower");
            high = guess - 1;
        }
    }
}

guessTheNumberGame();

function findProductByPrice(products, targetPrice) {
    let start = 0;
    let end = products.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let price = products[mid].price;

        if (price === targetPrice) return products[mid];
        if (price < targetPrice) start = mid + 1;
        else end = mid - 1;
    }

    return null;
}

const products = [
    { name: "Laptop", price: 500 },
    { name: "Phone", price: 800 },
    { name: "TV", price: 1200 },
    { name: "Watch", price: 1500 }
];

console.log(findProductByPrice(products, 1200));

function findCountry(countries, target) {
    let left = 0;
    let right = countries.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (countries[mid] === target) return mid;
        if (countries[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

const countries = ["Argentina", "Brazil", "Canada", "Denmark", "France", "Georgia"];
console.log(findCountry(countries, "France"));
console.log(findCountry(countries, "Japan"));
