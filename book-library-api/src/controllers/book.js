const {
  getAllItems,
  createItem,
  updateItem,
  getItemById,
  deleteItem,
} = require('./helpers');

exports.getBooks = (_, res) => {
  getAllItems(res, 'book');
};

exports.createBook = (req, res) => {
  createItem(res, 'book', req.body);
};

exports.getBookById = (req, res) => {
  getItemById(res, 'book', req.params.id);
};

exports.updateBook = (req, res) => {
  updateItem(res, 'book', req.body, req.params.id);
};

exports.deleteBook = (req, res) => {
  deleteItem(res, 'book', req.params.id);
};
