const { Book, Reader, Genre } = require('../models');

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
  const models = {
    book: Book,
    reader: Reader,
    genre: Genre,
  };
  return models[model];
};

const getOptions = (model) => {
  if (model === 'book') return { include: Genre };

  if (model === 'genre') return { include: Book };

  return {};
};

const removePassword = (obj) => {
  if (obj.hasOwnProperty('password')) {
    delete obj.password;
  }
  return obj;
};

exports.getAllItems = (res, model) => {
  const Model = getModel(model);

  const options = getOptions(model);

  return Model.findAll({ ...options }).then((items) => {
    const noPassword = items.map((item) => removePassword(item.dataValues));
    res.status(200).json(noPassword);
  });
};

exports.createItem = (res, model, item) => {
  const Model = getModel(model);

  return Model.create(item)
    .then((newItemCreated) => {
      const noPassword = removePassword(newItemCreated.dataValues);

      res.status(201).json(noPassword);
    })
    .catch((error) => {
      const errorMessages = error.errors.map((e) => e.message);

      return res.status(400).json({ errors: errorMessages });
    });
};

exports.getItemById = (res, model, id) => {
  const Model = getModel(model);

  const options = getOptions(model);

  return Model.findByPk(id, { ...options }).then((item) => {
    if (!item) {
      res.status(404).json(get404Error(model));
    } else {
      const noPassword = removePassword(item.dataValues);

      res.status(200).json(noPassword);
    }
  });
};

exports.updateItem = (res, model, item, id) => {
  const Model = getModel(model);

  return Model.update(item, { where: { id } }).then(([recordsUpdated]) => {
    if (!recordsUpdated) {
      res.status(404).json(get404Error(model));
    } else {
      getModel(model)
        .findByPk(id)
        .then((updatedItem) => {
          const noPassword = removePassword(updatedItem.dataValues);

          res.status(200).json(noPassword);
        });
    }
  });
};

exports.deleteItem = (res, model, id) => {
  const Model = getModel(model);

  return Model.findByPk(id).then((item) => {
    if (!item) {
      res.status(404).json(get404Error(model));
    } else {
      Model.destroy({ where: { id } }).then(() => {
        res.status(204).send();
      });
    }
  });
};
