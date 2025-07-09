const generateElement = () => {
    return Math.floor(Math.random() * (100) + 1);
}

const generateArray = () => Array.from({ length: 5 }, () => generateElement());
// above creates an array of 5 random numbers using generateElement()

const generateContainer = () => { return document.createElement("div") }

const fillArrContainer = (element, array) => {
    element.innerHTML = "";
    array.forEach((value) => {
        element.innerHTML += `<span>${value}</span>`;
    });
}

const isOrdered = (int1, int2) => {
    return int1 <= int2;
}

const swapElements = (arr, index) => {
    //console.log([index, index + 1]);
    if (index === (arr.length - 1) || index >= arr.length) {
        return false; // don't swap if index is last item or index doesn't exist
    }
    if (!isOrdered(arr[index], arr[index + 1])) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]; // could also do this using a temp Variable
        return true;
    }
    return false;
}

const highlightCurrentEls = (element, index) => {
    if (index >= (element.children.length)) {
        return;
    } else if (index === (element.children.length - 1)) {
        element.children[index].style.border = "2px dashed red";
    } else {
        element.children[index].style.border = "2px dashed red";
        element.children[index + 1].style.border = "2px dashed red";
    }
}

const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
    Array.from(arrayContainer.children).forEach((child) => {
        if (child !== startingArray) {
            arrayContainer.removeChild(child);
        }
    });
    fillArrContainer(startingArray, generateArray());
});

const sortBtn = document.getElementById("sort-btn");

sortBtn.addEventListener("click", () => {
    if (startingArray.children.length !== 5) { // basically, if we don't have an array generated or if we just finished sorting an array, we should generate a new one
        generateBtn.click();
    }
    const initialArray = [...Array.from(startingArray.children)].map(span => parseInt(span.textContent));
    let array = [...initialArray];
    let swapped = swapElements(array, 0);
    highlightCurrentEls(startingArray, 0);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (i === 0 && j === 0) { continue; }
            const stepContainer = generateContainer();

            fillArrContainer(stepContainer, array);

            highlightCurrentEls(stepContainer, j);
            arrayContainer.appendChild(stepContainer);
            let currSwap = swapElements(array, j);
            swapped = currSwap || swapped;
        }
        if (!swapped) {
            break;
        } else {
            swapped = false;
        }

    }
    const lastContainer = generateContainer();
    fillArrContainer(lastContainer, array);
    arrayContainer.appendChild(lastContainer);
    console.log(arrayContainer.innerHTML);
});