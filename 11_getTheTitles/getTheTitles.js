const getTheTitles = function(books) {
    return books.reduce((titles, book) => {
        titles.push(book.title);
        return titles;
    }, []);

    // OR
    // return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
