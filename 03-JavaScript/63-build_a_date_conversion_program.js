const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
    return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
    const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return `Formatted Date (Month Day, Year): ${formatted}`;
}

console.log(formatDateLong(currentDate));

function formatDateLongAlt(date){
    const monthName = date.toLocaleString("en-US", {month: "long"});
    const day = date.getDate();
    const year = date.getFullYear();
    return `Formatted Date (Month Day, Year): ${monthName} ${day}, ${year}`;
}

console.log(formatDateLongAlt(currentDate));