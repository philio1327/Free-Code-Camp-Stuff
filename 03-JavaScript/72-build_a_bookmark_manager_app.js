const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const bookmarkListSection = document.getElementById("bookmark-list-section");

const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");

const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
    const retrieved = localStorage.getItem("bookmarks");
    if (!retrieved) { // tests if "bookmarks" exists in local storage
        return [];
    }

    let bookmarks;
    try {
        bookmarks = JSON.parse(retrieved); // here we try and parse it to an array of objects
    } catch (e) { // if it fails, then either the array or the objects within were invalid
        return [];
    }

    // Validate it's an array
    if (!Array.isArray(bookmarks)) { // if stored object isn't an array return []
        return [];
    }

    // Validate each bookmark object
    const isValid = bookmarks.every(bookmark => // validate that each bookmark has the required keys
        bookmark &&
        typeof bookmark === "object" &&
        "name" in bookmark &&
        "category" in bookmark &&
        "url" in bookmark
    );

    return isValid ? bookmarks : [];
};

const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

addBookmarkBtn.addEventListener("click", () => {
    categoryName.textContent = `${categoryDropdown.value}`;
    displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
});

const reset = () => {
    nameInput.value = "";
    nameInput.textContent = "";
    urlInput.value = "";
    urlInput.textContent = "";
}

addBookmarkBtnForm.addEventListener("click", () => {
    if (!nameInput.value.trim()) {
        alert("Please input a name");
        return;
    }
    if (!urlInput.value.trim()) {
        alert("Please input a url");
        return;
    }
    const bookMark = {
        name: nameInput.value.trim(),
        category: categoryDropdown.value,
        url: urlInput.value.trim()
    };

    const retrieved = localStorage.getItem("bookmarks");

    if (!retrieved) {
        // No bookmarks stored yet — start a new array
        localStorage.setItem("bookmarks", JSON.stringify([bookMark]));

    } else {
        try {
            const arr = JSON.parse(retrieved);
            if (Array.isArray(arr)) {
                arr.push(bookMark);
                localStorage.setItem("bookmarks", JSON.stringify(arr));

            } else {
                // If the data isn't a valid array, overwrite it with a new one
                localStorage.setItem("bookmarks", JSON.stringify([bookMark]));

            }
        } catch (e) {
            // If parsing fails (corrupt data), overwrite with a new one
            localStorage.setItem("bookmarks", JSON.stringify([bookMark]));
        }
    }
    reset();
    displayOrCloseForm();
});

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
}

viewCategoryBtn.addEventListener("click", () => {
    categoryList.innerHTML = "";
    const retrieved = localStorage.getItem("bookmarks");
    const noneFound = "No Bookmarks Found";
    if (!retrieved) {
        categoryList.innerHTML = `<p>${noneFound}</p>`;
        return;
    }
    let arr;
    try {
        arr = JSON.parse(retrieved);
    } catch {
        categoryList.innerHTML = `<p>${noneFound}</p>`;
        return;
    }
    const filtered = arr.filter((bookmark) => bookmark.category === categoryDropdown.value);
    if (filtered.length === 0) {
        categoryList.innerHTML = `<p>${noneFound}</p>`;
        return;
    }
    categoryList.innerHTML = "";
    filtered.forEach((bookmark) => {
        categoryList.innerHTML += `<div><input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="selected-bookmark">` +
            `<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label></div>`;
    });
});

closeListBtn.addEventListener("click", () => {
    displayOrHideCategory();
    categoryList.innerHTML = "";
});

deleteBookmarkBtn.addEventListener("click", () => {
    const selectedRadio = document.querySelector('input[name="selected-bookmark"]:checked');
    const selectedCategory = categoryDropdown.value;

    if (!selectedRadio) {
        alert("Please select a bookmark to delete.");
        return;
    }

    const bookmarkName = selectedRadio.value;

    const bookmarksJSON = localStorage.getItem("bookmarks");
    if (!bookmarksJSON) return;

    let bookmarks;
    try {
        bookmarks = JSON.parse(bookmarksJSON);
    } catch {
        return;
    }

    // Filter out the selected bookmark
    const updatedBookmarks = bookmarks.filter(b =>
        !(b.name === bookmarkName && b.category === selectedCategory)
    );

    // Update local storage
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

    // Refresh the list
    viewCategoryBtn.click(); // Re-triggers the category display
});