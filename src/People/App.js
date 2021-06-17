import React from 'react';
import People from './People';
import PeopleStore from "./data/PeopleStore";
import PeopleActions from './data/PeopleActions';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            people: PeopleStore.getPeople()
        }

        // this.deletePerson = this.deletePerson.bind(this);
        // this.savePerson = this.savePerson.bind(this);
        this.reload = this.reload.bind(this);

        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }

    componentDidMount(){
        // PeopleStore.addListener('delete', this.deletePerson)
        // PeopleStore.addListener('save', this.savePerson)
        PeopleStore.addListener('change', this.reload)
    }

    componentWillUnmount(){
        // PeopleStore.removeListener('delete', this.deletePerson);
        // PeopleStore.removeListener('save', this.savePerson);
        PeopleStore.removeListener('change', this.reload);
    }

    reload(){
        const people = PeopleStore.getPeople();
        this.setState({people});
    }

    addPerson(event){
        const people = this.state.people;
        const name = (event.type == 'keypress') ? event.target.value : this.textInput.current.value ;
        if (name=='') return;
        // people.push(name);
        // this.setState({ people: people });
        // PeopleStore.emit('addPerson', name);
        PeopleActions.addPerson(name);
        this.textInput.current.value = '' ;
    }

    addPersonIfEnter(event){
        const charCode = event.charCode;
        if (charCode === 13) this.addPerson(event);
    }

    /*savePerson(id, name){
        const people = this.state.people;
        people.forEach(function (person, index) {
            if (id === index) {
                people[id] = name;
            }
        })
        this.setState({ people: people });
    }

    deletePerson(key){
        const people = this.state.people;
        people.forEach(function(person, index){
            if(key === index){
                people.splice(index, 1)
            }
        })
        this.setState({people: people});
    }*/
    
    render() {
        // console.log(PeopleStore.listenerCount('change'));
        return (
            <div>
                <input ref={ this.textInput } onKeyPress={ this.addPersonIfEnter.bind(this) }
                    placeholder="name" type="text"/>
                <button onClick={ this.addPerson.bind(this) } >Add Person</button>
                {/* <People savePerson={ this.savePerson.bind(this) } 
                        deletePerson={ this.deletePerson.bind(this) } people={ this.state.people } />*/}
                <People people={this.state.people} />
            </div>
        );
    }
}

export default Body;
