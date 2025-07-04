const poll = new Map();

const addOption = (option) => {
    if (!option) {
        return "Option cannot be empty.";
    }
    if (!poll.has(option)) {
        poll.set(option, new Set());
        return `Option "${option}" added to the poll.`
    } else {
        return `Option "${option}" already exists.`;
    }
}

const vote = (option, voterId) => {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    } else {
        let hasVoted = false;
        for (const voterSet of poll.values()) {
            if (voterSet.has(voterId)) {
                hasVoted = true;
                break;
            }
        }
        if (hasVoted) {
            return `Voter ${voterId} has already voted for "${option}".`
        } else {
            const setToUse = poll.get(option);
            setToUse.add(voterId);
            return `Voter ${voterId} voted for "${option}".`;
        }

    }
}

addOption("Egypt");
addOption("Canada");
addOption("USA");
addOption("Algeria");
addOption("Malaysia");


vote("Canada", 123);
vote("Canada", 456);
vote("USA", 111);
vote("Algeria", "traveler1");


const displayResults = () => {
    let results = "Poll Results:";
    poll.forEach((value, key) => {
        results += `\n${key}: ${value.size} votes`;
    });
    return results;
}
console.log(displayResults());