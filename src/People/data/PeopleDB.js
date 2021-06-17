import PouchDB from 'pouchdb';
import PeopleStore from './PeopleStore';

const PeopleDB = (function(){
    const people = [];
    
    const db = new PouchDB('People');
    
    db.allDocs({include_docs: true, descending: false})
        .then(doc=>doc.rows)
        .then(getPersonDoc)
        .catch(console.log)

    function getPersonDoc(people){
        people.forEach(function(person){
            addToList(person.doc);
        });
    }

    function addToList(person) {
        people.push(person.name);
        PeopleStore.emit('change');
    }

    function addPerson(name) {
        var person = {
            _id: Date.now().toString(),
            name: name
        };
        db.put(person)
            .then(console.log)
            .catch(console.log)
    }

    function getPeople(){
        return people;
    }

    return {
        addPerson: addPerson,
        getPeople: getPeople
    }

})()

window.PeopleDB = PeopleDB;

export default PeopleDB;