const TODO_ADD = "TODO-ADD";
const TOGGLE_COMPLETE = "TOGGLE-COMPLETE";
const REMOVE_TODO = "REMOVE-TODO";
const TOGGLE_REMINDED = "TOGGLE-REMINDED";
const REMOVE_ALL_TODO_FROM_CATEGORY = "REMOVE-ALL-TODO-FROM-CATEGORY";

// Для окна создания туду
const TOGGLE_TODO_WINDOW = "TOGGLE-TODO-WINDOW";
const CHANGE_TITLE_TEXT = "CHANGE-TITLE-TEXT";
const CHANGE_REMINDER_TIME_TEXT = "CHANGE-REMINDER-TEXT";
let initialState = {
	todos: [],
	todoCreateWindow: {
		isOpened: false,
		todoTitleText: "",
		todoReminderTimeText: "",
	},
};
function todoItemsReducer(state = initialState, action) {
	switch (action.type) {
		case TODO_ADD:
			let newTodo = {
				id: state.todos.length,
				title: state.todoCreateWindow.todoTitleText,
				completed: false,
				reminderTime: state.todoCreateWindow.todoReminderTimeText,
				isReminded: false,
				category: action.category,
			};
			return {
				...state,
				todos: [...state.todos, newTodo],
				todoCreateWindow: {
					...state.todoCreateWindow,
					todoTitleText: "",
					todoReminderTimeText: "",
				},
			};
		case TOGGLE_COMPLETE:
			return {
				...state,
				todos: state.todos.map((todo) => (todo.id === action.todoId ? { ...todo, completed: !todo.completed } : todo)),
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.todoId),
			};
		case TOGGLE_REMINDED:
			return {
				...state,
				todos: state.todos.map((todo) => (todo.id === action.todoId ? { ...todo, isReminded: true } : todo)),
			};
		case REMOVE_ALL_TODO_FROM_CATEGORY:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.category !== action.categoryName),
			};
		//Для окна создания туду
		case TOGGLE_TODO_WINDOW:
			return {
				...state,
				todoCreateWindow: {
					...state.todoCreateWindow,
					isOpened: !state.todoCreateWindow.isOpened,
				},
			};
		case CHANGE_TITLE_TEXT:
			return {
				...state,
				todoCreateWindow: {
					...state.todoCreateWindow,
					todoTitleText: action.text,
				},
			};
		case CHANGE_REMINDER_TIME_TEXT:
			return {
				...state,
				todoCreateWindow: {
					...state.todoCreateWindow,
					todoReminderTimeText: action.text,
				},
			};
		default:
			return state;
	}
}
export function toggleComplete(todoId) {
	return {
		type: TOGGLE_COMPLETE,
		todoId,
	};
}
export function addTodo(category) {
	return {
		type: TODO_ADD,
		category,
	};
}
export function removeTodo(todoId) {
	return {
		type: REMOVE_TODO,
		todoId,
	};
}
export function removeAllTodoFromCategory(categoryName) {
	return {
		type: REMOVE_ALL_TODO_FROM_CATEGORY,
		categoryName,
	};
}
// Для окна создания туду
export function toggleTodoWindow() {
	return {
		type: TOGGLE_TODO_WINDOW,
	};
}
export function changeTitleText(text) {
	return {
		type: CHANGE_TITLE_TEXT,
		text,
	};
}
export function changeReminderTimeText(text) {
	return {
		type: CHANGE_REMINDER_TIME_TEXT,
		text,
	};
}
export function toggleReminded(todoId) {
	return {
		type: TOGGLE_REMINDED,
		todoId,
	};
}
export default todoItemsReducer;
