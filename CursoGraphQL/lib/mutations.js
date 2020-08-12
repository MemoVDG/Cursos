'use strict'
// Conectarnos a BD
const connectDb = require('./db');
const { ObjectID } = require('mongodb')

/*
    Ejemplo de mutation de GraphiQL
    mutation {
        Datos requeridos
        createCourse( input : {
            title: "Curso de ejemplo 4",
            description: "Descripcion 4",
            topic: "Diseno",
        }){
        Datos que queremos que nos devuelva
            _id
            title
            description
        }
}
*/


module.exports = {
    createCourse: async(root, { input }) => {
        const defaults = {
            teacher : '',
            topic: ''
        };
        // Creamos un objeto de tipo curso
        const newCourse = Object.assign(defaults, input);
        let db;
        let course;
        try {
            db = await connectDb();
            // Insertamos en la BD
            course = await db.collection('courses').insertOne(newCourse);
            // insertedId devuelve el ultimo ID insertado
            newCourse._id = course.insertedId;
        } catch(error){
            console.error(error);
        }
        return newCourse;
    },

    editCourse: async(root, { _id, input }) => {
        let db;
        let course;
        try {
            db = await connectDb();
            // Editamos en la BD, buscando por el ID
            await db.collection('courses').updateOne(
                { _id: ObjectID(_id)},
                { $set: input }
            );
            // Ya que editamos, buscamos el curso para devolverlo
            course = await db.collection('courses').findOne({_id: ObjectID(_id) });
        } catch(error){
            console.error(error);
        }
        return course; 
    },

    createStudent : async(root, { input }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            // Insertamos en la BD
            student = await db.collection('students').insertOne(input);
            // insertedId devuelve el ultimo ID insertado
            input._id = student.insertedId;
        } catch(error){
            console.error(error);
        }
        return input;
    },

    editStudent: async(root, { _id, input }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            // Editamos en la BD, buscando por el ID
            await db.collection('students').updateOne(
                { _id: ObjectID(_id)},
                { $set: input }
            );
            // Ya que editamos, buscamos el curso para devolverlo
            student = await db.collection('students').findOne({_id: ObjectID(_id) });
        } catch(error){
            console.error(error);
        }
        return student; 
    }
}