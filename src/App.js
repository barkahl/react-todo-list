import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import Filter from './Filter';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            filterQuery: ''
        };

        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleDoneItem = this.handleDoneItem.bind(this);
        this.filterItems = this.filterItems.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    handleNewItem(name) {
        this.state.items.unshift({
            id: this.state.items.length + 1,
            name: name,
            done: false
        });

        this.setState({
            items: this.state.items
        });
    }

    findItemById(id) {
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === id) {
                return this.state.items[i];
            }
        }
    }

    handleDoneItem(id) {
        let item = this.findItemById(id);
        let index = this.state.items.indexOf(item);

        this.state.items.splice(index, 1);

        item.done = true;
        this.state.items.push(item);

        this.setState({
            items: this.state.items
        });
    }

    filterItems(query) {
        this.setState({
            filterQuery: query
        });
    }

    clearFilter() {
        this.setState({
            filterQuery: ''
        });
    }

    render() {
        return (
            <div>
                <h1>React to-do list</h1>
                <Form handleNewItem={this.handleNewItem} />
                <Filter filterItems={this.filterItems} clearFilter={this.clearFilter} />
                <List items={this.state.items} filterQuery={this.state.filterQuery} handleDoneItem={this.handleDoneItem} />
            </div>
        );
    }
}

export default App;
