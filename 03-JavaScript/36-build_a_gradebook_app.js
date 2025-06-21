function getAverage(scores) {
    let sum = 0;
    for (let val of scores) {
        sum += val;
    }
    return sum / (scores.length);
}

function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score >= 0) {
        return "F";
    } else {
        return "Invalid Score";
    }
}

function hasPassingGrade(score) {
    return score >= 60;
}

function studentMsg(scores, yourScore) {
    let average = getAverage(scores);
    let yourGrade = getGrade(yourScore);
    let resultString = `Class average: ${average}. Your grade: ${yourGrade}. `
    return hasPassingGrade(yourScore) ? resultString + `You passed the course.` : resultString + `You failed the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));