function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let randomIndex = Math.floor(Math.random() * array.length);

    let pivot = array[randomIndex];
    const less = [];
    const equal = [];
    const greater = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            less.push(array[i]);
        } else if (array[i] > pivot) {
            greater.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }
    let lower = quickSort(less);
    let equal1 = equal;
    let great = quickSort(greater);
    return [...lower, ...equal1, ...great];
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));