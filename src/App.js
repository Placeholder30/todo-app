import React from "react";
import Heading from "./components/Heading";
import Todolist from "./components/Todolist";
import "./index.css";
import { nanoid } from "nanoid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: [{ item: "", completed: false, id: nanoid() }],
    };
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  addTodo = (e) => {
    e.preventDefault();
    if (this.state.input === "" || this.state.input.trim().length === 0) return;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          item: this.state.input,
          completed: false,
          id: nanoid(),
        },
      ],
      input: "",
    });
  };
  markComplete = (e, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (e, id) => {
    e.preventDefault();

    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  editTodo = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  render() {
    return (
      <div className="container">
        <Heading />
        <Todolist
          inputValue={this.handleChange}
          addTodo={this.addTodo}
          state={this.state}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

export default App;
