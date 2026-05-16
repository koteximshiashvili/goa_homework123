function findLongestAndShortestWords(text) {
    const words = text.split(' ');

    let longestWord = '';
    let shortestWord = '';

    for (let word of words) {

        if (word.length === 0){
            continue;
        }

        if (shortestWord === '' || word.length < shortestWord.length) {
            shortestWord = word;
        }

        if (longestWord === '' || word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return [shortestWord, longestWord];
}

const text = "This is a simple example text to find the longest and shortest words.";
const result = findLongestAndShortestWords(text);
console.log(result);
