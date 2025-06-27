const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // replaces non-letters and non-digits with ""
    return cleaned === cleaned.split("").reverse().join(""); //rmr in JS, reverse only exists on arrays, so we convert to array, then reverse and convert back to string
}

checkBtn.addEventListener("click", () => 
    (textInput.value.length > 0) ? result.textContent = `${textInput.value} is ${isPalindrome(textInput.value) ? "" : "not"} a palindrome` 
                                : alert("Please input a value"));