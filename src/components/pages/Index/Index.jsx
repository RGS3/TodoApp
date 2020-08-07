import React from "react";
import "../../../styles/pages/index/index.scss";
import TodoContainer from "./Todo/TodoContainer";
import Message from "../../imports/Message";
function Index({ todos, todoWindow, addTodo, toggleTodoWindow, changeTitleText, changeReminderTimeText, ...props }) {
	function toggleTodoWindowClick() {
		toggleTodoWindow();
	}
	function addTodoClick() {
		if (todoWindow.todoTitleText) {
			let category = props.match.params.category;
			addTodo(category);
			toggleTodoWindow();
		}
		if (todoWindow.todoReminderTimeText) {
			if (Notification.permission !== "granted") {
				Notification.requestPermission();
			}
		}
	}
	function changeTitleTextInput(e) {
		changeTitleText(e.target.value);
	}
	function changeReminderTimeTextEvent(e) {
		changeReminderTimeText(e.target.value);
	}

	return (
		<main className="container">
			{todos.map((todo) =>
				todo.category == props.match.params.category ? <TodoContainer key={todo.id} todo={todo} /> : ""
			)}
			<div className="add-todo-block">
				<button onClick={toggleTodoWindowClick} className="add-todo-block__btn">
					+
				</button>
			</div>
			<Message todoWindow={todoWindow} toggleWindow={toggleTodoWindow}>
				<div className="message__header">
					<h2>Create Todo</h2>
				</div>
				<div className="message__body">
					<input
						onChange={(e) => {
							changeTitleTextInput(e);
						}}
						type="text"
						placeholder="Todo Title"
						value={todoWindow.todoTitleText}
					/>
					<div className="message__reminder-time-block">
						<label htmlFor="time">Reminder time</label>
						<input
							onChange={(e) => changeReminderTimeTextEvent(e)}
							value={todoWindow.todoReminderTimeText}
							type="time"
							id="time"
						/>
					</div>
					<button className="bg-btn" onClick={addTodoClick}>
						Add
					</button>
				</div>
			</Message>
		</main>
	);
}
export default Index;
