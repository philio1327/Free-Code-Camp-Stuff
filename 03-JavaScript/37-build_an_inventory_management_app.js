let inventory = [];

function findProductIndex(productName) {
    let name = productName.toLowerCase();
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            return i;
        }
    }
    return -1;
}

function addProduct(product) {
    product.name = product.name.toLowerCase();
    let index = findProductIndex(product.name);
    if (index === -1) {
        inventory.push(product);
        console.log(`${product.name} added to inventory`);
    } else {
        inventory[index].quantity += product.quantity;
        console.log(`${product.name} quantity updated`);
    }
}
function removeProduct(productName, amount) {
    let name = productName.toLowerCase();

    let index = findProductIndex(name);
    if (index === -1) {
        console.log(`${name} not found`);
    } else if (amount > inventory[index].quantity) {
        console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    } else {
        inventory[index].quantity -= amount;
        console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
        if (inventory[index].quantity === 0) {
            console.log(`Removing ${name} from inventory.`);
            inventory.splice(index, 1);
            console.log(`Removed ${name} from inventory.`);
        }
    }
}
removeProduct("FLOUR", 5);
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
removeProduct("FLOUR", 5);
addProduct({ name: "rice", quantity: 5 });
removeProduct("FLOUR", 5);
removeProduct("FLOUR", 5);
removeProduct("FLOUR", 10);
removeProduct("FLOUR", 5);