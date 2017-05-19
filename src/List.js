import React from 'react';
import Item from './Item';

class List extends React.Component {
    render() {
        const items = this.props.items
            .filter(item => item.name.includes(this.props.filterQuery))
            .map(item => <Item key={item.id} item={item} handleDoneItem={this.props.handleDoneItem} />);

        return (
            <ul>
                {items}
            </ul>
        );
    };
}

export default List;
