'use strict'
const { MongoClient } = require('mongodb');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env


const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

let connection;

async function connectDB(){
    if(connection){
        return connection
    }

    let  client;
    try {
        client = await MongoClient.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB connected');
        connection = client.db(DB_NAME);
    } catch (error) {
        console.error('Couldt connecto to the db', MONGO_URI, error);
        process.exit(1)
    }

    return connection;
}

module.exports = connectDB;