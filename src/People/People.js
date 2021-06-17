import React from 'react';
import Person from './Person';

class People extends React.Component {

    deletePerson(index){
        this.props.deletePerson(index);
    }

    savePerson(name, index){
        this.props.savePerson(name, index);
    }
    
    render() {
        var list = this.props.people.map(function(person, index){
             return <Person deletePerson={ this.deletePerson.bind(this) }
                            savePerson={ this.savePerson.bind(this) }
                            key={index} index={person._id} name={person.name} />
        }.bind(this));
        return (
            <ul>
                { list }
            </ul>
        )
    }
}

export default People;
