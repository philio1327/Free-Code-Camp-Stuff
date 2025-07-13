function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    let prod = 1;
    for (let val = 2; val <= num; val++) {
        prod *= val;
    }
    return prod;
}

function permute(str) {
    if (str.length <= 1) {
        return str;
    }
    let returnArr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaining = str.slice(0, i) + str.slice(i + 1);

        const innerPermute = permute(remaining);

        for (let j = 0; j < innerPermute.length; j++) {
            returnArr.push(char + innerPermute[j]);
        }

    }
    return returnArr;

}

function permAlone(str) {
    let charSet = new Set();
    for (const char of str) {
        charSet.add(char);
    }
    if (charSet.size === str.length) {
        return factorial(str.length);
    } else if (charSet.size === 1) {
        return 0;
    } else {
        let permutations = permute(str);
        let sum = 0;
        for (let permutation of permutations) {
            let double = false;
            for (let i = 0; i < permutation.length - 1; i++) {
                if (permutation[i] === permutation[i + 1]) {
                    double = true;
                    break;
                }
            }
            if (!double) {
                sum += 1;
            }
        }
        return sum;
    }
}
console.log(permute("abc"))
console.log(permAlone('aab'));