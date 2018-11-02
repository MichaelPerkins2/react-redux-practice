import React, { Component } from 'react';
import Todos from './Todos.js';
import AddTodo from './AddTodo.js';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy grocieries'},
      {id: 2, content: 'Make Dinner'}
    ]
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  };
  addTodo = (todo) => {
    todo.id = Math.floor(Math.random()*1000);
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To-Do's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
