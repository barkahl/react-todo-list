import React from 'react';

const ENTER_KEY_CODE = 13;

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleButtonClick() {
        this.addNewItem();
    }

    handleKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.addNewItem();
        }
    }

    addNewItem() {
        const value = this.input.value;

        if (value) {
            this.props.handleNewItem(value);
            this.input.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="New item..." autoFocus ref={(ref) => this.input = ref} onKeyDown={this.handleKeyDown}/>
                <button onClick={this.handleButtonClick}>Add item</button>
            </div>
        );
    }
}

export default Form;
