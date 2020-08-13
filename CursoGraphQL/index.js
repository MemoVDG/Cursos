'use strict'
require('dotenv').config();
const { makeExecutableSchema  } = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

// Definiendo schema
const typeDefs = readFileSync( join( __dirname, 'lib', 'schema.graphql'), 'utf-8');
const schema = makeExecutableSchema({typeDefs, resolvers});
// Varificamos si estamos en produccion para mostrar o no graphiql
const isDev = process.env.NODE_ENV.trimRight() !== 'production';


// Configuracion de CORS
app.use(cors());

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
}))

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/api`)
})