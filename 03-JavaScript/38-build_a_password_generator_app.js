function generatePassword(passLength) {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    let randomVal = 0;
    for (let i = 0; i < passLength; i++) {
        randomVal = Math.floor(Math.random() * (string.length));
        password += string[randomVal];
    }
    console.log(`Generated password: ${password}`);
    return password;
}
let password = generatePassword(10);