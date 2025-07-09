function binarySearch(searchList, value) {
    let arrayPath = [];

    let leftIndex = 0;
    let rightIndex = searchList.length - 1;
    let testIndex = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex <= rightIndex) {
        let testVal = searchList[testIndex];
        arrayPath.push(testVal);
        if (testVal === value) {
            return arrayPath;
        } else if (testVal < value) {
            leftIndex = testIndex + 1;
            testIndex = Math.floor((leftIndex + rightIndex) / 2);
        } else {
            rightIndex = testIndex - 1;
            testIndex = Math.floor((leftIndex + rightIndex) / 2);
        }
    }
    console.log(arrayPath)
    return "Value Not Found";
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];
console.log(binarySearch(testArray, 1));