const { Artist } = require('../sequelize');
const { Album } = require('../sequelize');
const { Song } = require('../sequelize');

exports.createSong = (req, res) => {
  const { albumId } = req.params;

  Album.findByPk(albumId).then((album) => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      const songData = {
        name: req.body.name,
        albumId: album.id,
        artistId: album.artistId,
      };
      Song.create(songData).then((song) => {
        res.status(201).json(song);
      });
    }
  });
};

exports.getSongsByAlbum = (req, res) => {
  const { albumId } = req.params;

  Album.findByPk(albumId).then((song) => {
    if (!song) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      Song.findAll({ where: { albumId } }).then((songs) => res.status(200).json(songs));
    }
  });
};

exports.updateSongById = (req, res) => {
  const { songId } = req.params;

  Song.update(req.body, { where: { id: songId } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      res.status(404).json({ error: 'The song could not be found.' });
    } else {
      res.status(200).json(rowsUpdated);
    }
  });
};

exports.deleteSongById = (req, res) => {
  const { songId } = req.params;

  Song.findByPk(songId).then((song) => {
    if (!song) {
      res.status(404).json({ error: 'The song could not be found.' });
    } else {
      Song.destroy({ where: { id: songId } }).then(() => {
        res.status(204).send();
      });
    }
  });
};
