function isLeapYear(year) {
    let test1 = ((year % 4) === 0);
    let test2 = ((year % 100) === 0);
    let test3 = ((year % 400) === 0);
    if ((test1 && !test2) || (test1 && test2 && test3)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);