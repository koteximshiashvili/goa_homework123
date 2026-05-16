function countingSort(arr, maxValue) {
    const n = arr.length;

    const count = new Array(maxValue + 1).fill(0);

    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }

    let total = 0;
    for (let i = 0; i <= maxValue; i++) {
        const old = count[i];
        count[i] = total;
        total += old;
    }

    const output = new Array(n);
    for (let i = 0; i < n; i++) {
        const value = arr[i];
        const pos = count[value];
        output[pos] = value;
        count[value]++;
    }

    return output;
}

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}
