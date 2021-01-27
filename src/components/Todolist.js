import React from "react";

function Todolist(props) {
  function getStyle(completeStatus) {
    return {
      textDecoration: completeStatus ? "line-through" : "none",
      
    };
  }

  return (
    <div>
      <form>
        <div className="input-field"> 
          <input
            type="text"
            value={props.state.input}
            onChange={props.inputValue}
            
          />
          <button type="submit" onClick={props.addTodo}>
            ➕️
          </button>
        </div >
       

        <ul>
          {props.state.todos.map((todo, index) => {
            if (!todo.item) return "";
            return (
              <li key={index} style={getStyle(todo.completed)}>
                {todo.item}
                <div className='icons'>
                <input
                  defaultChecked={todo.completed}
                  type="checkbox"
                  name="check"
                  onClick={(e) => {
                    props.markComplete(e, todo.id);
                  }}
                />
                
                <button
                  onClick={(e) => {
                    props.deleteTodo(e, todo.id);
                  }}
                >
                  🚮️
                </button>{" "}
                <button
                  onClick={(e) => {
                    props.editTodo(e, todo.id);
                  }}
                >
                  ✏️
                </button>
                </div>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}


export default Todolist;
