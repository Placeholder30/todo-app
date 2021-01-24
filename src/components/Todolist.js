import React from "react";

function Todolist(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.state.input}
          onChange={props.inputValue}
        />{" "}
        <span>
          <button type="submit" onClick={props.addTodo}>
            submit
          </button>
        </span>
        <ul>
          {props.state.todos.map((todo, index) => {
            if (!todo.item) return "";
            return (
              <li key={index}>
                {todo.item}{" "}
                <input
                  defaultChecked={todo.completed}
                  type="checkbox"
                  name="check"
                  onClick={(e) => {
                    props.markComplete(e, todo.index);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default Todolist;
