const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-btn");



galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const thumbnailSrc = item.getAttribute("src");
        const fullSizeSrc = thumbnailSrc.replace("-thumbnail", "");
        lightBoxImage.setAttribute("src", fullSizeSrc);

        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
