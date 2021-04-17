const author ={
    name : "ken bruen",
    genre : "noir",
    nationality : "Irish"

};


function favBook(){
    return {title : "The Guards" , author : "Ken Bruen"};
}

function getBookRecommendations(){
    return [
        {id: 1, title: "The Guards", author: "Ken Bruen"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain"}
    ];
}

module.exports.author = author;
module.exports.favBook = favBook;
module.exports.getBookRecommendations = getBookRecommendations;