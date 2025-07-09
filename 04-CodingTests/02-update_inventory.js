function updateInventory(arr1, arr2) {
    arr1.sort(compareFunc);
    arr2.sort(compareFunc);

    let returnArr = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1][1] === arr2[index2][1]) {
            returnArr.push([arr1[index1][0] + arr2[index2][0], arr1[index1][1]]);
            index1++;
            index2++;
        } else if (arr1[index1][1] < arr2[index2][1]) {
            returnArr.push(arr1[index1]);
            index1++;
        } else {
            returnArr.push(arr2[index2]);
            index2++;
        }
    }
    if (index1 < arr1.length) {
        returnArr.push(...(arr1.slice(index1)));
    }
    if (index2 < arr2.length) {
        returnArr.push(...(arr2.slice(index2)));
    }
    return returnArr;

}

function compareFunc(a, b) {
    if (a[1] === b[1]) {
        return 0;
    } else {
        return a[1] < b[1] ? -1 : 1;
    }
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));