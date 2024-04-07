import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {

    state = {
        people: [],

        currentPerson: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    resetCurrentPerson = () => {
        this.setState({
            currentPerson: {
                firstName: '',
                lastName: '',
                age: ''
            }
        })
    }

    copyCurrentPerson = () => {
        return {
            firstName: this.state.currentPerson.firstName,
            lastName: this.state.currentPerson.lastName,
            age: this.state.currentPerson.age
        }
    }

    onClearClick = () => {
        this.setState({ people: [] });
        this.resetCurrentPerson();
    }

    onAddClick = () => {
        if (!this.state.currentPerson.firstName || !this.state.currentPerson.lastName || !this.state.currentPerson.age) {
            return;
        }

        this.setState({ people: [...this.state.people, this.state.currentPerson] });
        this.resetCurrentPerson();
    }

    onTextBoxChange = e => {
        let copy = this.copyCurrentPerson();

        if (e.target.placeholder === 'First name') {
            copy.firstName = e.target.value;

        } else if (e.target.placeholder === 'Last name') {
            copy.lastName = e.target.value;

        } else {
            copy.age = e.target.value;
        }

        this.setState({ currentPerson: copy })
    }

    getContent = () => {
        if (this.state.people.length === 0) {
            return (<h3>No people added yet...</h3>)
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map(person => <PersonRow person={person} />)}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <>
                <PersonForm
                    currentPerson={this.state.currentPerson}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    onTextBoxChange={this.onTextBoxChange}
                />
                {this.getContent()}
            </>)
    };
}

export default PeopleTable;