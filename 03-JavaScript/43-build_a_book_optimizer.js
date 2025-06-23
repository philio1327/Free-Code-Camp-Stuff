const books = [
    { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
    { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
    { title: "Moby-Dick", authorName: "Herman Melville", releaseYear: 1851 },
    { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
    { title: "Pride and Prejudice", authorName: "Jane Austen", releaseYear: 1813 },
    { title: "The Catcher in the Rye", authorName: "J.D. Salinger", releaseYear: 1951 },
    { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
    { title: "War and Peace", authorName: "Leo Tolstoy", releaseYear: 1869 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", authorName: "J.R.R. Tolkien", releaseYear: 1954 },
    { title: "Crime and Punishment", authorName: "Fyodor Dostoevsky", releaseYear: 1866 }
];

function sortByYear(book1, book2) {
    if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear === book2.releaseYear) {
        return 0;
    } else {
        return "Unexpected Problem";
    }
}

const filteredBooks = books.filter(book => book.releaseYear > 1950);
console.log("Before sort:");
console.log(JSON.stringify(filteredBooks, null, 2)); // creates a snapshot. if you don't stringify, the sorted result will be displayed twice in browser console.
console.log();
filteredBooks.sort(sortByYear);
console.log("After sort:");
console.log(JSON.stringify(filteredBooks, null, 2));