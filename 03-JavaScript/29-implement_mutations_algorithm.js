function mutation(arr) {
    let count = 0;
    if (arr.length <= 1) {
        return false;
    }
    const word1 = arr[0].toLowerCase();
    const word2 = arr[1].toLowerCase();

    for (const char of word2) {
        if (word1.includes(char)) {
            count++;
        }
    }
    return count >= word2.length;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log("");
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log("");
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log("");
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true