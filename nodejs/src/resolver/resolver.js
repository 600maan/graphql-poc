const Movie = require('../model/Movie');

const resolvers = {
  Query: {
    movies: async () => {
      return await Movie.find();
    },
    movieById: async (_, { id }) => {
      return await Movie.findById(id);
    },
    moviesByYear: async (_, { year }) => {
          if (!year) {
            throw new Error('year is required');
          }
        const movies = await Movie.find({ year });
        return {
          count: movies.length,
          movies,
        };
    },
    moviesByGenres: async (_, { genres }) => {
      if (!genres) {
        throw new Error('Genres is required');
      }
       const movies = await Movie.find({ genres: genres });
       return {
         count: movies.length,
         movies,
       };
    },
  },
};

module.exports = resolvers;