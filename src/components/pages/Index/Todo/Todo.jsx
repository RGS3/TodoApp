import React from "react";
import "../../../../styles/pages/index/todo.scss";
import deleteIcon from "../../../../media/images/delete.svg";
function Todo({ todo, toggleComplete, removeTodo }) {
	function toggleCompleteClick() {
		toggleComplete(todo.id);
	}
	function removeTodoClick() {
		removeTodo(todo.id);
	}
	return (
		<div className={`flex-container todo ${todo.completed && "completed"}`}>
			<div className="default-checkbox">
				<input
					onChange={toggleCompleteClick}
					className="todo__checkbox"
					type="checkbox"
					checked={todo.completed}
					id={`completed${todo.id}`}
				/>
				<label htmlFor={`completed${todo.id}`}></label>
			</div>
			<div className="todo__title-wrapper">
				<h2 className="todo__title">{todo.title}</h2>
			</div>
			<button onClick={removeTodoClick} className="default-btn todo__remove">
				<img className="icon animated-icon" src={deleteIcon} alt="Delete" />
			</button>
		</div>
	);
}
export default Todo;
