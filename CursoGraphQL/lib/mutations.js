'use strict'
// Conectarnos a BD
const connectDb = require('./db');
const { ObjectID } = require('mongodb')
const errorHanlder = require('./errorHanlder');

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
            errorHanlder(error);
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
            errorHanlder(error);
        }
        return course; 
    },
    deleteCourse: async(root, { _id} ) => {
        let db;
        try {
            db = await connectDb();
            // Eliminamos de la BD
            await db.collection('courses').deleteOne({ _id: ObjectID(_id)});
        } catch(error) {
            errorHanlder(error);
        }
        return _id;

    },
    createPerson: async(root, { input }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            // Insertamos en la BD
            student = await db.collection('students').insertOne(input);
            // insertedId devuelve el ultimo ID insertado
            input._id = student.insertedId;
        } catch(error){
            errorHanlder(error);
        }
        return input;
    },

    editPerson: async(root, { _id, input }) => {
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
            errorHanlder(error);
        }
        return student; 
    },
    deletePerson: async(root, { _id }) => {
        let db;
        try {
            db = await connectDb();
            // Eliminar de la BD
            await db.collection('students').deleteOne({ _id: ObjectID(_id) });
        } catch(error){
            errorHanlder(error);
        }

        return _id;
    },

    addPeople: async(root, { courseID, personID }) => {
        let db;
        let person;
        let course;
        try {
            db = await connectDb();
            // Buscamos el curso y la persona para verificar que existan
            course = await db.collection('courses').findOne({_id: ObjectID(courseID)})
            person = await db.collection('students').findOne({_id: ObjectID(personID)});

            if (!course || !person){
                throw new Error('La persona o el curso no existe');
            }

            await db.collection('courses').updateOne(
                {_id: ObjectID(courseID)},
                // addToSet checa si hay un arreglo y lo agrega y si ya existe no agrega nada
                { $addToSet: { people: ObjectID(personID)} }
                )
        } catch (error){
            errorHanlder(error);
        }

        return course;
    }
}