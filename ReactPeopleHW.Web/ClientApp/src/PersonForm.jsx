import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div>
                        < input type='text'
                            placeholder='First name'
                            value={this.props.currentPerson.firstName}
                            onChange={this.props.onTextBoxChange}
                        />
                    </div>
                    <div>
                        < input type='text'
                            placeholder='Last name'
                            value={this.props.currentPerson.lastName}
                            onChange={this.props.onTextBoxChange}
                        />
                    </div>
                    <div>
                        < input type='text'
                            placeholder='Age'
                            value={this.props.currentPerson.age}
                            onChange={this.props.onTextBoxChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div>
                        <button onClick={this.props.onClearClick}>Clear</button>
                    </div>
                </div>
            </>
        )
    }
}

export default PersonForm;