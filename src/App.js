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
        this.setState({
            items: [{
                id: this.state.items.length + 1,
                name,
                done: false
            }, ...this.state.items]
        });
    }

    handleDoneItem(id) {
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    item.done = true;
                }

                return item;
            })
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
