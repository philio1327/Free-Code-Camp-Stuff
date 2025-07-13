function sym(...args) {
    if (args.length <= 1) {
        return args[0];
    }
    else {
        let arr1 = args[0];
        let arr2 = args[1];
        let solSet = new Set();

        for (const val1 of arr1) {
            if (!arr2.includes(val1)) {
                solSet.add(val1);
            }
        }
        for (const val2 of arr2) {
            if (!arr1.includes(val2)) {
                solSet.add(val2);
            }
        }
        if (args.length === 2) {
            return Array.from(solSet).sort();
        } else {
            let tempArr = Array.from(solSet);
            solSet = new Set();
            for (let index = 2; index < args.length; index++) {
                let newArr = args[index];
                for (const val1 of tempArr) {
                    if (!newArr.includes(val1)) {
                        solSet.add(val1);
                    }
                }
                for (const val2 of newArr) {
                    if (!tempArr.includes(val2)) {
                        solSet.add(val2);
                    }
                }
                tempArr = Array.from(solSet);
                solSet = new Set();
            }
            return tempArr.sort();
        }
    }
}
console.log(sym([], [3, 4, 5]));
console.log(sym([3, 4, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));