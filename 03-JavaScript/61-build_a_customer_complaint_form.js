const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/; // standard email format regex: e.g. someone@example.com

const orderNoInput = document.getElementById("order-no");
const orderRegex = /^2024\d{6}$/; // Format is: 2024###### where # is a digit

const productCodeInput = document.getElementById("product-code");
const productRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/; // Format is: XX##-X###-XX# where X is a letter (lower+upper) and # is a digit

const quantityInput = document.getElementById("quantity");

const complaintGroup = document.getElementById("complaints-group");
const complaintCheckboxes = document.querySelectorAll("input[name='complaint']");
const otherComplaint = document.getElementById("other-complaint");
const complaintTextArea = document.getElementById("complaint-description");

const solutionFieldset = document.getElementById("solutions-group");
const solutionsGroup = document.querySelectorAll("input[name='solutions']");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

const submitButton = document.getElementById("submit-btn");

function validateForm() {
    let fullName = false;
    let email = false;

    let orderNo = false;


    let productCode = false;


    let quantity = false;

    let complaints = false;
    let complaintsDesc = false;

    let solutions = false;
    let solutionDesc = false;

    if (fullNameInput.value.length > 0) {
        fullName = true;
    }
    email = (emailInput.value.length > 0) && (emailRegex.test(emailInput.value));

    orderNo = orderRegex.test(orderNoInput.value);
    productCode = productRegex.test(productCodeInput.value);

    let quantityVal = Number(quantityInput.value);

    if (!isNaN(quantityVal) && Number.isInteger(quantityVal) && quantityVal >= 1) {
        quantity = true;
    }

    complaints = [...complaintCheckboxes].some(checkbox => checkbox.checked);

    if (otherComplaint.checked && complaintTextArea.value.length >= 20) {
        complaintsDesc = true;
    }
    if (!otherComplaint.checked) {
        complaintsDesc = true;
    }

    solutions = [...solutionsGroup].some(radio => radio.checked);

    if (otherSolution.checked && solutionDescription.value.length >= 20) {
        solutionDesc = true;
    }

    if (!otherSolution.checked) {
        solutionDesc = true;
    }


    return {
        "full-name": fullName,
        "email": email,
        "order-no": orderNo,
        "product-code": productCode,
        "quantity": quantity,
        "complaints-group": complaints,
        "complaint-description": complaintsDesc,
        "solutions-group": solutions,
        "solution-description": solutionDesc
    };
}

function isValid(obj) {
    for (const key in obj) {
        if (!obj[key]) {
            return false;
        }
    }
    return true;
}

fullNameInput.addEventListener("change", () => {
    if (fullNameInput.value.length > 0) {
        fullNameInput.style.border = "2px solid green";
    } else {
        fullNameInput.style.border = "2px solid red";
    }
});

emailInput.addEventListener("change", () => {
    if (emailInput.value.length > 0 && emailRegex.test(emailInput.value)) {
        emailInput.style.border = "2px solid green";
    } else {
        emailInput.style.border = "2px solid red";
    }
});

orderNoInput.addEventListener("change", () => {
    if (orderNoInput.value.length === 10 && orderRegex.test(orderNoInput.value)) {
        orderNoInput.style.border = "2px solid green";
    } else {
        orderNoInput.style.border = "2px solid red";
    }
});

productCodeInput.addEventListener("change", () => {
    if (productRegex.test(productCodeInput.value)) {
        productCodeInput.style.border = "2px solid green";
    } else {
        productCodeInput.style.border = "2px solid red";
    }
});

quantityInput.addEventListener("change", () => {
    let quantityVal1 = Number(quantityInput.value);
    if (!isNaN(Number(quantityVal1)) && Number.isInteger(quantityVal1) && quantityVal1 >= 1) {
        quantityInput.style.border = "2px solid green";
    } else {
        quantityInput.style.border = "2px solid red";
    }
});

let complaintCountUnchecked = 4;
complaintCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            complaintGroup.style.border = "2px solid green";
            complaintCountUnchecked--;
        } else {
            complaintCountUnchecked++;
        }
        if (complaintCountUnchecked === 4) {
            complaintGroup.style.border = "2px solid red";
        }
    });
});

complaintTextArea.addEventListener("change", () => {
    if (otherComplaint.checked) {
        if (complaintTextArea.value.length >= 20) {
            complaintTextArea.style.border = "2px solid green";
        } else {
            complaintTextArea.style.border = "2px solid red";
        }
    } else {
        complaintTextArea.style.border = "1px solid rgb(118, 118, 118)";
    }
});

otherComplaint.addEventListener("change", () => {
    if (!otherComplaint.checked) {
        complaintTextArea.style.border = "1px solid rgb(118, 118, 118)";
    }
});

let radioUnchecked = 3;
solutionsGroup.forEach((radio) => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            solutionFieldset.style.border = "2px solid green";
            radioUnchecked--;
        } else {
            radioUnchecked++;
        }
        if (radioUnchecked === 3) {
            solutionFieldset.style.border = "2px solid red";
        }
    });
});

solutionDescription.addEventListener("change", () => {
    if (otherSolution.checked) {
        if (solutionDescription.value.length >= 20) {
            solutionDescription.style.border = "2px solid green";
        } else {
            solutionDescription.style.border = "2px solid red";
        }
    } else {
        solutionDescription.style.border = "1px solid rgb(118, 118, 118)";
    }
});

submitButton.addEventListener("click", () => {
    isValid(validateForm());
});

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isValid(validateForm())) {
        console.log("Form is valid! Submitting Form");
        form.submit();
    } else {
        alert("One or more of the input fields have invalid or non-existent inputs");
    }
});