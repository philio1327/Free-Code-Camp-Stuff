function insertionSort(array) {

    if (array.length <= 1) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        let currIndex = i;
        while (currIndex > -1) {
            if (array[currIndex] < array[currIndex - 1]) {
                [array[currIndex - 1], array[currIndex]] = [array[currIndex], array[currIndex - 1]];
                currIndex--;
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));