const db = require('../db/db');

const createBook = async ({ bookName, authorName, dateOfBorrow, dateOfReturn, borrowBy }) => {
    console.log(bookName, authorName, dateOfBorrow, dateOfReturn, borrowBy)
    const [id] = await db('book')
        .insert({
            book_name: bookName,
            author_name: authorName,
            date_of_borrow: dateOfBorrow,
            date_of_return: dateOfReturn,
            borrow_by: borrowBy
        })
        .returning('id');

    return id;
}

const getBook = async () => {
    const books = await db('book').select()
    return books;
}
const getBookById = async ({ id }) => {
    const books = await db('book').where({ 'id': id })
    return books;
}

const updateBook = async ({ id, bookName, authorName, dateOfBorrow, dateOfReturn, borrowBy }) => {
    console.log(id)
    const book = await db('book').where({ 'id': id })
        .update({
            book_name: bookName,
            author_name: authorName,
            date_of_borrow: dateOfBorrow,
            date_of_return: dateOfReturn,
            borrow_by: borrowBy
        })

    return book
}

const deleteBook = async ({ id }) => {
    console.log("Delete", id)
    const book = await db('book').delete().where({ 'id': id })
    return book;
}
exports.createBook = createBook
exports.getBook = getBook
exports.updateBook = updateBook
exports.getBookById = getBookById
exports.deleteBook = deleteBook