import React from "react";
import Heading from "./components/Heading";
import Todolist from "./components/Todolist";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: [{ item: "", completed: false, index: 0 }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  addTodo(e) {
    e.preventDefault();
    if (this.state.input === "") return;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          item: this.state.input,
          completed: false,
          index: this.state.todos.length,
        },
      ],
      input: "",
    });
  }
  markComplete(e, index) {
    console.log(e, index);
    this.setState({
      todos: [...this.state.todos].map((todo) => {
        if (todo.index === index) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <Heading />
        <Todolist
          inputValue={this.handleChange}
          addTodo={this.addTodo}
          state={this.state}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
