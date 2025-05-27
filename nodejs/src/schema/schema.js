const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const path = require('path');

const schemaPath = path.join(__dirname, '..', 'schema.graphqls');
const typeDefs = loadSchemaSync(schemaPath, {
  loaders: [new GraphQLFileLoader()]
});

module.exports = typeDefs;