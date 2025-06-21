function pyramid(char, num, bool) {
    let numChars = 2 * num - 1;
    // Start with false case
    let resultString = "\n";
    if (!bool) {
        for (let i = 0; i < num; i++) {
            let numSpace = numChars - 1 - (2 * i);
            resultString += " ".repeat(numSpace / 2) + char.repeat(2 * i + 1) + "\n";
        }
    } else {
        for (let i = num - 1; i > -1; i--) {
            let numSpace = numChars - 1 - (2 * i);
            resultString += " ".repeat(numSpace / 2) + char.repeat(2 * i + 1) + "\n";
        }
    }

    return resultString;

}

let res1 = "\n   o\n  ooo\n ooooo\nooooooo\n";
let res1Real = pyramid("o", 4, false);
console.log(res1 === res1Real);
let res2 = "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n";
let res2Real = pyramid("p", 5, true);
console.log(res2 === res2Real);