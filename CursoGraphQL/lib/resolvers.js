'use strict'

const mutations = require('./mutations');
const queries = require('./queries');

// Por cada query tenemos que crear el resolver
module.exports = {
    Query: queries,
    Mutation: mutations
}
