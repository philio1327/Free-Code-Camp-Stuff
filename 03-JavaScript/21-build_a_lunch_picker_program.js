function addLunchToEnd(array, string) {
    console.log(`${string} added to the end of the lunch menu.`);
    array.push(string);
    return array;
}

function addLunchToStart(array, string) {
    console.log(`${string} added to the start of the lunch menu.`);
    array.unshift(string);
    return array;
}

function removeLastLunch(array) {
    if (array.length === 0) {
        console.log("No lunches to remove.");
        return array;
    }
    let item = array.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
    return array;
}

function removeFirstLunch(array) {
    if (array.length === 0) {
        console.log("No lunches to remove.");
        return array;
    }
    let item = array.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
    return array;
}

function getRandomLunch(array) {
    if (array.length === 0) {
        console.log("No lunches available.");
        return array;
    }
    let randomIndex = Math.round((Math.random() * (array.length - 1)));
    let item = array[randomIndex];
    console.log(`Randomly selected lunch: ${item}`);
}

function showLunchMenu(array) {
    if (array.length === 0) {
        console.log("The menu is empty.");
        return 0;
    } else {
        let returnString = array.join(", ");
        returnString = returnString.slice(0, returnString.length);
        console.log(`Menu items: ${returnString}`);
    }

}
const lunches = [];
addLunchToEnd(lunches, "Greens");
addLunchToEnd(lunches, "Corns");
addLunchToEnd(lunches, "Beans");
showLunchMenu(["Greens", "Corns", "Beans"]);
getRandomLunch(lunches)