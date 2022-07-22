const book = require('../service/book');

const createBook = async (req, res) => {
    try {
        const id = await book.createBookService(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

const getBook = async (req, res) => {
    try {
        const id = await book.getBookService();
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

const updateBook = async (req, res) => {
    try {
        const id = await book.updateBookService(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
}

exports.createBook = createBook
exports.getBook = getBook
exports.updateBook = updateBook