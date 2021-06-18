import { EventEmitter } from 'events';
import PouchDB from 'pouchdb';
import Dispatcher from "../../dispatcher/Dispatcher";
import ActionTypes from "./ActionTypes";

class PeopleStore extends EventEmitter {
    constructor() {
        super();

        this.db = new PouchDB('people');
        
        this.people = [];

        Dispatcher.register(this.handleAction.bind(this));

        this.sync();

        this.updateState();

        /*this.db
            .changes({
                since: 'now',
                live: true
            })
            .on('change', this.updateState.bind(this));*/
        
    }

    sync() {
        var hostname = location.origin;
        var remoteCouch = `${hostname}/db/people`;
        var opts = { /*live: true*/ };
        this.db
            .replicate.to(remoteCouch, opts)
            .then(console.log)
            .catch(console.log)
        this.db
            .replicate.from(remoteCouch, opts)
            .then(console.log)
            .catch(console.log)
            .then(this.updateState.bind(this))
    }

    updateState() {
        // console.log('update state');
        this.db
            .allDocs({ include_docs: true, descending: false })
            .then(doc => doc.rows)
            .then(getPeopleDoc)
            .then(addToList.bind(this))
            .catch(console.log);

        function getPeopleDoc(rows) {
            return rows.map(people => people.doc);
        }

        function addToList(people) {
            this.people = people;
            this.emit('change');
        }
    }

    getPeople() {
        return this.people;
    }

    deletePerson(id) {
        this.db
            .get(id)
            .then(this.db.remove)
            .then(console.log)
            .then(this.sync.bind(this))
            .catch(console.log)
            .then(this.updateState.bind(this));
    }

    updatePerson(id, name) {
        this.db
            .get(id)
            .then(changeName)
            .then(this.db.put)
            .then(console.log)
            .then(this.sync.bind(this))
            .catch(console.log)
            .then(this.updateState.bind(this))


        function changeName(person) {
            if (person.name != name) {
                person.name = name;
                return person;
            } else throw new Error('Person name is same. Not updating');
        }
    }

    addPerson(name) {
        var person = {
            _id: Date.now().toString(),
            name: name
        };
        this.db
            .put(person)
            .then(console.log)
            .then(this.sync.bind(this))
            .catch(console.log)
            .then(this.updateState.bind(this));


    }

    handleAction(action) {
        switch (action.type) {
            case ActionTypes.ADD_PERSON: {
                this.addPerson(action.name);
                return;
            }

            case ActionTypes.DELETE_PERSON: {
                this.deletePerson(action.id);
                return;
            }

            case ActionTypes.UPDATE_PERSON: {
                this.updatePerson(action.id, action.name);
                return;
            }

            default:
                return;
        }
    }
}

const peopleStore = new PeopleStore();

window.peopleStore = peopleStore;

export default peopleStore;