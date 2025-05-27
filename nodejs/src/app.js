const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const connectDB = require('./config/db');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const logger = require('./config/logger');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(express.json()); // Middleware to parse JSON request body

// Middleware to log incoming GraphQL requests
app.use('/graphql', (req, res, next) => {
  logger.info(`GraphQL request: ${req.method} ${req.url}`);
  if (req.body && req.body.query) {
    logger.info(`GraphQL query: ${req.body.query}`);
    logger.info(`GraphQL variables: ${JSON.stringify(req.body.variables)}`);
  }
  next();
});

app.use('/graphql', createHandler({ schema }));
const PORT = process.env.NODE_PORT || 4000;

// Enable MongoDB query logging
mongoose.set('debug', true);

connectDB().then(() => {
  app.listen({ port: PORT }, () =>
  logger.info(`Server ready at http://localhost:${PORT}/graphql`)
  );
});