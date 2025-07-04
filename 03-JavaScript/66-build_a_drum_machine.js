const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        const audio = pad.querySelector("audio");

        if (audio) {
            audio.currentTime = 0;
            audio.play();
            display.textContent = `Clicked Pad: ${audio.id} playing ${pad.id}`;
        }
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.textContent = `Clicked Pad: ${audio.id} playing ${pad.id}`;
    }
});