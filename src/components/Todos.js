import React, { Component } from 'react';
//import TodoItem from './TodoItem';


class Todos extends Component {
    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <h3>yo!</h3>
        )); 
    }
}


export default Todos;
