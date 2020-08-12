'use strict'
// Conectarnos a BD
const connectDb = require('./db');

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
    }
}