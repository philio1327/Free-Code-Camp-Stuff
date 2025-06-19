let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.round(Math.random() * (5 - 1) + 1);

console.log(randomNumber);
let selectedFortune;

switch (randomNumber) {
    case 1:
        selectedFortune = fortune1;
        break;
    case 2:
        selectedFortune = fortune2;
        break;
    case 3:
        selectedFortune = fortune3;
        break;
    case 4:
        selectedFortune = fortune4;
        break;
    case 5:
        selectedFortune = fortune5;
        break;
    default:
        selectedFortune = "Unexpected Behaviour";
        break;
}
console.log(selectedFortune);