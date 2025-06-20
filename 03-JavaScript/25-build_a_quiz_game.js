const questions = [];

const obj1 = {
    category: "History",
    question: "Who was Canada's first Prime Minister?",
    choices: ["Sir Alexander Mackenzie", "Sir John A. MacDonald", "Sir Wilfred Laurier"],
    answer: "Sir John A. MacDonald"
};

const obj2 = {
    category: "Geography",
    question: "What is the world's longest river?",
    choices: ["Nile", "Amazon", "Mississippi"],
    answer: "Nile"
};

const obj3 = {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mercury", "Venus", "Mars"],
    answer: "Mars"
};

const obj4 = {
    category: "Art",
    question: "Who painted 'Iris', a painting found at at National Art Gallery in Ottawa?",
    choices: ["Pablo Picasso", "Claude Monet", "Vincent Van Gogh"],
    answer: "Vincent Van Gogh"
};

const obj5 = {
    category: "Pop Culture",
    question: "Who is known as the Queen of Pop?",
    choices: ["Madonna", "Beyoncé", "Taylor Swift"],
    answer: "Madonna"
};

questions.push(obj1, obj2, obj3, obj4, obj5);

function getRandomQuestion(arr) {
    let randomIndex = Math.floor(Math.random() * (arr.length));
    return arr[randomIndex];
}

function getRandomComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * (arr.length));
    return arr[randomIndex];
}

function getResults(question, compChoice) {
    if (question.answer === compChoice) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}