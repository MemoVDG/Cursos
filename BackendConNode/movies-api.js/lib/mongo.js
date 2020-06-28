const { MogoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbHost;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class Mongolib {
  constructor() {
    this.client = new MogoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!Mongolib.connection) {
      Mongolib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }

          console.log('Connected success');
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return Mongolib.connection;
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      return db.collection().find(query).toArray();
    });
  }

  get(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection.findOne({ _id: ObjectId(id) });
      })
      .findOne({ _id: ObjectId(id) });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection.insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db.collection.updateOne(
          { _id: ObjectId(id) },
          { $set: data },
          { upsert: true }
        );
      })
      .then((result) => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection.deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = Mongolib;
