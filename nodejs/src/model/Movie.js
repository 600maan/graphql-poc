const mongoose = require('mongoose');

const awardsSchema = new mongoose.Schema({
  wins: Number,
  nominations: Number,
  text: String,
});

const imdbSchema = new mongoose.Schema({
  rating: Number,
  votes: Number,
  id: Number,
});

const viewerSchema = new mongoose.Schema({
  rating: Number,
  numReviews: Number,
});

const tomatoesSchema = new mongoose.Schema({
  viewer: viewerSchema,
  production: String,
  lastUpdated: Date,
});

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  numMflixComments: Number,
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: awardsSchema,
  lastupdated: String,
  year: Number,
  imdb: imdbSchema,
  countries: [String],
  type: String,
  tomatoes: tomatoesSchema,
  plotEmbedding: [Number],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;