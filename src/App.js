import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: "Journal",
        completed: false
      },
      {
        id: 2,
        task: "Workout",
        completed: false
      },
      {
        id: 3,
        task: "Yoga",
        completed: false
      },

    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App"> 
      <Todos todos={this.state.todos} />
      </div>
    );
  }
}

  export default App;
