function countingSort(arr, d) {
    const n = arr.length
    const output = new Array(n)
    const count = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / d) % 10
        count[digit]++
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / d) % 10
        output[count[digit] - 1] = arr[i]
        count[digit]--
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i]
    }
}

function radixSort(arr) {
    const max = Math.max(...arr)

    for (let d = 1; Math.floor(max / d) > 0; d *= 10) {
        countingSort(arr, d)
    }

    return arr
}
