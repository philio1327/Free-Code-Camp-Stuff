function frankenSplice(arr1, arr2, index) {
    if (index >= arr2.length) { // if the index is larger than the length of arr2, then the result is just arr2 + arr1 concatenated
        return arr2.concat(arr1);
    } else if (index === 0) { // if we want to put arr1 into arr2 at index 0, that's the same as arr1 + arr2 concatenated
        return arr1.concat(arr2);
    } else {
        let resultArr = [].concat(arr2); 
        resultArr.splice(index, 0, ...arr1);
        return resultArr;
    }
}

function frankenSpliceFor(arr1, arr2, index){
    // this function does the same as above but with for loops instead of splice and slice
        if (index >= arr2.length) { // if the index is larger than the length of arr2, then the result is just arr2 + arr1 concatenated
        return arr2.concat(arr1);
    } else if (index === 0) { // if we want to put arr1 into arr2 at index 0, that's the same as arr1 + arr2 concatenated
        return arr1.concat(arr2);
    } else {
        let resultArr = [];
        for (let i=0; i<index; i++){
            resultArr.push(arr2[i]);
        }
        for (let i=0; i<arr1.length; i++){
            resultArr.push(arr1[i]);
        }
        for (let i=index; i<arr2.length;i++ ){
            resultArr.push(arr2[i]);
        }
        return resultArr;
    }
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log();
console.log(frankenSpliceFor([1, 2, 3], [4, 5], 1))
console.log(frankenSpliceFor([1, 2], ["a", "b"], 1));
console.log(frankenSpliceFor(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSpliceFor([1, 2, 3, 4], [], 0));
