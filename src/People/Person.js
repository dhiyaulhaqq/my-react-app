import React from 'react';
import PeopleStore from './data/PeopleStore';
import PeopleActions from './data/PeopleActions';

class Person extends React.Component {
    constructor(){
        super();
        this.state = {
            className: ''
        }

        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }

    editName(){
        this.setState({className: 'edit'});
        this.textInput.current.value=this.props.name;

        setTimeout(function(){
            this.textInput.current.focus();
            this.textInput.current.select();
        }.bind(this), 0)
    }

    saveName(event){
        const name = event.target.value;
        const index = this.props.index;
        // this.props.savePerson(name, index);
        // PeopleStore.emit('updatePerson', index, name);
        PeopleActions.updatePerson(index, name)

        this.setState({ className: '' });
    }

    saveNameIfEnter(event){
        const charCode = event.charCode;
        if(charCode === 13) this.saveName(event);
    }

    deletePerson(){
        // this.props.deletePerson(this.props.index);
        // PeopleStore.emit('deletePerson', this.props.index);
        // PeopleStore.deletePerson(this.props.index);
        PeopleActions.deletePerson(this.props.index);
    }

    render() {
        return (
            <li class={this.state.className}>
                <span onClick={ this.editName.bind(this) } >{ this.props.name }</span>
                <input ref={ this.textInput } onBlur={ this.saveName.bind(this) } onKeyPress={ this.saveNameIfEnter.bind(this) } />
                <i class="del" onClick={this.deletePerson.bind(this)} >X</i>
            </li>
        )
    }
}

export default Person;
