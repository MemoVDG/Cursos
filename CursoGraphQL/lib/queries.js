'use strict'
// Conectarse a la BD
const connectDb = require('./db');
const { ObjectID } = require('mongodb')

/*
    Ejemplo query basica
    {
        gerCourses(){
            _id
            title
        }
    }
    Query con parametros
    {
        getCourse(_id: "hjsdgdh526"){
            title
        }
    }

    // ALIAS, sirven para traer mas de una query en una sola peticion
    {
        AllCourses: getCourses{
            _id
            title
        }

        AllStudents: getStudents{
            _id
            name
        }
    }

    // Fragments, sirve para reocupar secciones ya traidas en una peticion y ocupar esos campos en otra peticion
    {
        AllCourses: getCourses{
            ...CourseFields
            description
        }

        Course1: getCourse(_id: "kjha7978jkhsdk"){
            ...CourseFields
            teacher
            topic
        }

    }

    fragment CourseFields on Course{
        _id
        title
    }

    // Directivas permite agregar condiciones a las queries
        query getPeopleData($monitor: Boolean!, $avatar: Boolean!){
            getPeople{
                        _id
                        name
                        ... on Monitor @include(if: $monitor){
                            phone
                        }
                        ... on Student @include(if: $avatar){
                            avatar
                            email
                        }
                }
        }
*/

module.exports = {
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
    getCourse: async (root, { _id }) => {
        let db;
        let course;
        try {
            db = await connectDb();
            course = await db.collection('courses').findOne({_id : ObjectID(_id) });
        } catch(error) {
            console.error(error);
        }
        return course;
    },

    // People
    getPeople: async () => {
        let db;
        let students = [];
        try {
            db = await connectDb();
            students = await db.collection('students').find().toArray();
        } catch(error) {
            console.error(error);
        }
        return students
    },
    getPerson: async (root, { _id }) => {
        let db;
        let student;
        try {
            db = await connectDb();
            student = await db.collection('students').findOne({_id : ObjectID(_id) });
        } catch(error) {
            console.error(error);
        }
        return student;
    },
    searchItems: async(root, { keyword }) => {
        let db;
        let items;
        let courses;
        let people;
        try{
            db = await connectDb();
            courses = await db.collection('courses').find(
                { $text: { $search: keyword } }
                ).toArray();
            people = await db.collection('students').find(
                { $text: { $search: keyword } }
                ).toArray();
            items = [...courses, ...people];
        } catch(error){
            console.log(error);
        }

        return items;
        
    }
}