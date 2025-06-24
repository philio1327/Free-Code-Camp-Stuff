const genButtons = document.querySelectorAll(".favorite-icon");

genButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("filled")) {
            button.classList.remove("filled");
            button.innerHTML = "&#9825;"; // outlined heart ♡
        } else {
            button.classList.add("filled");
            button.innerHTML = "&#10084;"; // solid heart ❤
        }
    });
});