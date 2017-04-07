import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.props.filterItems(event.target.value);
    }

    handleButtonClick() {
        this.props.clearFilter();
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Filter..." onChange={this.handleInputChange} ref={(ref) => this.input = ref}/>
                <button onClick={this.handleButtonClick}>Clear filter</button>
            </div>
        );
    }
}

export default Filter;
