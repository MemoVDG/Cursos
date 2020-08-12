'use strict'
// Conectarse a la BD
const connectDb = require('./db');
const { ObjectID } = require('mongodb')

// Por cada query tenemos que crear el resolver
module.exports = {
    Query:{
        getCourses: async () => {
            let db;
            let courses = [];
            try {
                db = await connectDb();
                courses = await db.collection('courses').find().toArray();
            } catch(error) {
                console.error(error);
            }
            return courses
        },
        getCourse: async (root, { id }) => {
            let db;
            let course
            try {
                db = await connectDb();
                course = await db.collection('courses').findOne({_id : ObjectID(id) });
            } catch(error) {
                console.error(error);
            }
            return course;
        }
    }
}
