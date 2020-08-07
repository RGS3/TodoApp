import { combineReducers, createStore } from "redux";
import todoItemsReducer, {
	toggleReminded,
} from "./reducers/todo-items-reducer";
import menuReducer from "./reducers/menu-reducer";
import settingsReducer from "./reducers/settings-reducer";
let combinedReducers = combineReducers({
	todoItems: todoItemsReducer,
	menu: menuReducer,
	settings: settingsReducer,
});
const persistedState = localStorage.getItem("state")
	? JSON.parse(localStorage.getItem("state"))
	: {};
let store = createStore(combinedReducers, persistedState);
store.subscribe(() => {
	localStorage.setItem("state", JSON.stringify(store.getState()));
});
window.store = store;
setInterval(() => {
	let array = store.getState().todoItems.todos;
	let currentTime = new Date(Date.now()).toLocaleTimeString().slice(0, 5);
	array.forEach((todo) => {
		if (
			todo.reminderTime === currentTime &&
			!todo.isReminded &&
			!todo.completed
		) {
			if (Notification.permission === "granted") {
				store.dispatch(toggleReminded(todo.id));
				let notification = new Notification(
					"Have you forgotten about your task?",
					{
						body: `The task ${todo.title} is waiting for you`,
						icon: "logo.png",
					}
				);
			}
		}
	});
}, 1000);
export default store;
