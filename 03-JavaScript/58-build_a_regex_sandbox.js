const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    let resultString = "";
    if (caseInsensitiveFlag.checked) {
        resultString += "i";
    }
    if (globalFlag.checked) {
        resultString += "g";
    }
    return resultString;
}

testButton.addEventListener("click", () => {
    const text = stringToTest.textContent;
    const patternInput = regexPattern.value;
    const flags = getFlags();

    let regex;

    try {
        regex = new RegExp(patternInput, flags);
    } catch (e) {
        testResult.textContent = "Invalid regex pattern!";
        return;
    }

    const match = text.match(regex);

    if (match) {
        // Only highlight first match
        const highlightedHTML = text.replace(regex, `<span class="highlight">$&</span>`);
        stringToTest.innerHTML = highlightedHTML;

        // Show match(es) in #result
        testResult.textContent = flags.includes("g") ? match.join(", ") : match[0]; // ternary operator if "g" flag is checked, include all matches, otherwise only first match
    } else {
        testResult.textContent = "no match";
    }
});