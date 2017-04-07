import React from 'react';
import Item from './Item';

class List extends React.Component {
    render() {
        let items = [];

        this.props.items.map(item => {
            if (item.name.includes(this.props.filterQuery)) {
                items.push(item);
            }
            return item;
        });

        return (
            <ul>
                {items.map(item => <Item key={item.id} item={item} handleDoneItem={this.props.handleDoneItem} />)}
            </ul>
        );
    };
}

export default List;
