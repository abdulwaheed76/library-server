const book = require('../dao/book')

const createBookService = (bookData) => {
  return book.createBook(bookData);
}

const getBookService = () => {
  return book.getBook();
}

const getBookByIdService = (id) => {
  return book.getBookById(id);
}

const updateBookService = (bookData) => {
  return book.updateBook(bookData);
}
const deleteBookService =(id)=>{
  return book.deleteBook(id)
}


exports.createBookService = createBookService
exports.getBookService = getBookService
exports.updateBookService = updateBookService
exports.getBookByIdService =getBookByIdService
exports.deleteBookService = deleteBookService