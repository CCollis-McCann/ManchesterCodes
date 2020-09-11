const express = require('express');

const artistController = require('./controllers/artists');
const albumController = require('./controllers/albums');
const songController = require('./controllers/songs');

const app = express();

app.use(express.json());

app.post('/artists', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:id', artistController.getArtistByID);
app.patch('/artists/:id', artistController.updateArtistById);
app.delete('/artists/:id', artistController.deleteArtistById);

app.post('/artists/:artistId/albums', albumController.createAlbum);
app.get('/artists/:artistId/albums', albumController.getAlbumsByArtist);
app.patch('/albums/:albumId', albumController.updateAlbumById);
app.delete('/albums/:albumId', albumController.deleteAlbumById);

app.post('/albums/:albumId/song', songController.createSong);
app.get('/albums/:albumId/songs', songController.getSongsByAlbum);

app.patch('/song/:songId', songController.updateSongById);
app.delete('/song/:songId', songController.deleteSongById);

module.exports = app;
