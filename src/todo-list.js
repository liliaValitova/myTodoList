import React from "react";

const Todo = ({ todo, toggleTask, removeTarget }) => {
  return (
    <div key={todo.id + todo.key} className="item-todo">
      <div
        onClick={() => toggleTask(todo.id)}
        className={todo.complete ? "item-text strike" : "item-text"}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTarget(todo.id)}>
        x
      </div>
    </div>
  );
};

export default Todo;