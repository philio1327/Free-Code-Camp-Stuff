function maskEmail(email) {
    let index = email.indexOf("@");
    if (index === -1) {
        return "Invalid Email";
    }
    let numStars = index - 2;
    let stars = "*".repeat(numStars);
    let returnString = `${email[0]}${stars}${email[index - 1]}${email.slice(index)}`;
    return returnString;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));