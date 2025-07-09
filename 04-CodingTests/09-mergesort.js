function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) {
        mergedArr.push(...arr1.slice(i));
    }
    if (j < arr2.length) {
        mergedArr.push(...arr2.slice(j));
    }
    return mergedArr;
}



function mergeSort(array) {

    if (array.length < 2) {
        return array;
    }
    let left = array.slice(0, Math.ceil(array.length / 2));
    let right = array.slice(Math.ceil(array.length / 2));

    let newLeft = mergeSort(left);
    let newRight = mergeSort(right);

    let merged = merge(newLeft, newRight);

    return merged;
}


console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));