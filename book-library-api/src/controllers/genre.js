const {
  getAllItems,
  createItem,
  updateItem,
  getItemById,
  deleteItem,
} = require('./helpers');

exports.getGenre = (_, res) => {
  getAllItems(res, 'genre');
};

exports.createGenre = (req, res) => {
  createItem(res, 'genre', req.body);
};

exports.getGenreById = (req, res) => {
  getItemById(res, 'genre', req.params.id);
};

exports.updateGenre = (req, res) => {
  updateItem(res, 'genre', req.body, req.params.id);
};

exports.deleteGenre = (req, res) => {
  deleteItem(res, 'genre', req.params.id);
};
