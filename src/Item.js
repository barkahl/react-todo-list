import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        if (event.target.checked) {
            this.props.handleDoneItem(this.props.item.id);
        }
    }

    render() {
        return (
            <li className={this.props.item.done ? 'item-done' : ''}>
                <input type="checkbox" disabled={this.props.item.done} onChange={this.handleCheckboxChange} />
                <span className="item-id">{this.props.item.id}</span>
                <span className="item-name">{this.props.item.name}</span>
            </li>
        );
    }
}

export default Item;
