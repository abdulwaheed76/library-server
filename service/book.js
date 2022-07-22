const book = require('../dao/book')

const createBookService = (bookData) => {
  return book.createBook(bookData);
}

const getBookService = () => {
  return book.getBook();
}

const updateBookService = (bookData) => {
  return book.updateBook(bookData);
}


exports.createBookService = createBookService
exports.getBookService = getBookService
exports.updateBookService = updateBookService