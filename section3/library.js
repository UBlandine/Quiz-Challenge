// Sample book data
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
  { title: "1984", author: "George Orwell", publicationYear: 1949 },
  { title: "Animal Farm", author: "George Orwell", publicationYear: 1945 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
  { title: "Brave New World", author: "Aldous Huxley", publicationYear: 1932 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationYear: 1951 }
];

// a. Group books by author
function groupBooksByAuthor(books) {
  
  return books.reduce((grouped, book) => {
    if (!grouped[book.author]) {
      grouped[book.author] = [];
    }
    grouped[book.author].push(book);
    return grouped;
  }, {});
}

// b. Find books published after a given year
function findBooksPublishedAfter(books, year) {
  return books
    .filter(book => book.publicationYear > year)
    .map(book => book.title);
}

// c. Generate book summaries
function generateBookSummaries(books) {
  return books.map(book => 
    `${book.title} by ${book.author} (${book.publicationYear})`
  );
}

// d. Sort books by publication year (oldest to newest)
function sortByPublicationYear(books) {
  return [...books].sort((a, b) => a.publicationYear - b.publicationYear);
}

// Test the functions
console.log("Books grouped by author:");
console.log(JSON.stringify(groupBooksByAuthor(books), null, 2));

console.log("\nBooks published after 1950:");
console.log(findBooksPublishedAfter(books, 1950));

console.log("\nBook summaries:");
console.log(generateBookSummaries(books));

console.log("\nBooks sorted by publication year (oldest to newest):");
const sortedBooks = sortByPublicationYear(books);
console.log(generateBookSummaries(sortedBooks));