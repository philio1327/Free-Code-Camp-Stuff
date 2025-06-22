function sumAll(arr1) {
    let num1 = arr1[0];
    let num2 = arr1[1];
    let sum = 0;
    let lower, higher;
    if (num1 < num2) {
        lower = num1;
        higher = num2;
    } else {
        lower = num2;
        higher = num1;
    }
    for (let i = lower; i <= higher; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll([1, 4])) //10
console.log(sumAll([4, 1])) //10
console.log(sumAll([5, 10])) //45
console.log(sumAll([10, 5])) //45
console.log(Number(undefined));