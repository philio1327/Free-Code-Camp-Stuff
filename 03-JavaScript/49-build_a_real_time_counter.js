const charCount = document.getElementById("char-count");
const textInput = document.getElementById("text-input");

textInput.setAttribute("maxlength", "50");

textInput.addEventListener("input", () => {
    const currLength = textInput.value.length;
    const maxLength = textInput.getAttribute("maxlength");
    if (textInput.value.length > maxLength) {
        textInput.value = textInput.value.slice(0, maxLength); // trim extra input
    }

    charCount.textContent = `Character Count: ${currLength}/${maxLength}`;

    if (currLength >= 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});