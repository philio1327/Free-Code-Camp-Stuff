function pairwise(arr, arg) {
    if (arr.length <= 1) {
        return 0;
    }
    let solSet = new Set();
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                if (!solSet.has(i) && !solSet.has(j)) {
                    solSet.add(i);
                    solSet.add(j);
                    sum += (i + j);
                }
            }
        }
    }
    return sum;
}

function pairwise2(arr, arg) {
    if (arr.length <= 1) {
        return 0;
    }
    let solSet = new Set();
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                if (!solSet.has(i) && !solSet.has(j)) {
                    solSet.add(i);
                    solSet.add(j);
                }
            }
        }
    }

    return Array.from(solSet).reduce((accumulator, newVal) => accumulator + newVal, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise2([1, 4, 2, 3, 0, 5], 7));

let numIterations = 100000;
let start1 = performance.now();
for (let i = 0; i < numIterations; i++) {
    pairwise2([1, 4, 2, 3, 0, 5], 7);
    pairwise2([1, 3, 2, 4], 4);
    pairwise2([1, 1, 1], 2);
    pairwise2([0, 0, 0, 0, 1, 1], 1);
    pairwise2([], 100);
}
let end1 = performance.now();

let start2 = performance.now();
for (let i = 0; i < numIterations; i++) {
    pairwise([1, 4, 2, 3, 0, 5], 7);
    pairwise([1, 3, 2, 4], 4);
    pairwise([1, 1, 1], 2);
    pairwise([0, 0, 0, 0, 1, 1], 1);
    pairwise([], 100);
}
let end2 = performance.now();

console.log(`Elapsed time for pairwise: ${end1 - start1} milliseconds`);
console.log(`Elapsed time for pairwise2: ${end2 - start2} milliseconds`);