
let books = require('./book.js');

console.log(books.author);       //data stored in a single variable
console.log(books.favBook());    //data returned by a function
console.log("Recommended books");
console.log(books.getBookRecommendations());   //array returned by a function