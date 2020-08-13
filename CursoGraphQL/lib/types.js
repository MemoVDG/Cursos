'use stric'
// Conectarnos a BD
const connectDb = require('./db');
const { ObjectID } = require('mongodb');
const errorHanlder = require('./errorHanlder');
// Funcion para objetos anidados, por ejemplo cursos tiene anidamiento de estudiantes

module.exports = {
    Course : {
        people: async ({ people }) => {
            let db;
            let peopleData;
            let ids;
            try {
                db = await connectDb();
                // Verificamos si tenemos ids en people
                ids = people ? people.map(id => ObjectID(id)) : [];
                peopleData = ids.length > 0 ? 
                // Buscamos todos los estudiantes en el arreglo de ids
                    await db.collection('students').find(
                        {_id: {$in: ids}}
                        ).toArray()
                    : 
                    [];
            } catch(error){
                errorHanlder(error)
            }
            return peopleData;
        }
    },

    Person: {
        // Para que pueda distinguir entre tipo estudiante o monitor
        __resolveType: (person, context, info) => {
            if(person.phone){
                return 'Monitor';
            } 
            return 'Student';
        }
    },

    GlobalSearch: {
        __resolveType: (item, context, info) => {
            if(item.title){
                return 'Course';
            }else if(item.phone){
                return 'Monitor';
            }

            return 'Student';
        }
    }
}