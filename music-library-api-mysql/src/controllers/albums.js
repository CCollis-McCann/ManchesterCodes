const { Artist } = require('../sequelize');
const { Album } = require('../sequelize');

exports.createAlbum = (req, res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.create(req.body).then((album) => {
        album.setArtist(artistId).then((linkedAlbum) => {
          res.status(201).json(linkedAlbum);
        });
      });
    }
  });
};

exports.getAlbumsByArtist = (req, res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findAll({ where: { artistId } }).then((albums) => res.status(200).json(albums));
    }
  });
};

exports.updateAlbumById = (req, res) => {
  const { albumId } = req.params;

  Album.update(req.body, { where: { id: albumId } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      res.status(200).json(rowsUpdated);
    }
  });
};

exports.deleteAlbumById = (req, res) => {
  const { albumId } = req.params;

  Album.findByPk(albumId).then((album) => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      Album.destroy({ where: { id: albumId } }).then(() => {
        res.status(204).send();
      });
    }
  });
};
