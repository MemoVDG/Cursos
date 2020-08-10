'use strict'
const { buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');

const app = express();
const port = process.env.port || 3000;

// Definiendo schema
const schema = buildSchema(
    readFileSync(
        join(
            __dirname, 
            'lib', 
            'schema.graphql'
            ),
            'utf-8'
            ));

// Configuracion de resolvers
const resolvers = {
    // Por cada query tenemos que crear el resolver
    hello: () => {
        return 'Hola Mundo'
    }

}

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/api`)
})