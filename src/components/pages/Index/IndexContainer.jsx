import React from "react";
import { connect } from "react-redux";
import Index from "./Index";
import {
	addTodo,
	changeReminderTimeText,
	changeTitleText,
	toggleTodoWindow,
} from "../../redux/reducers/todo-items-reducer";
import { withRouter } from "react-router";
function mapStateToProps(state) {
	return {
		todos: state.todoItems.todos,
		todoWindow: state.todoItems.todoCreateWindow,
	};
}
let withRouterContainer = withRouter(Index);
export default connect(mapStateToProps, {
	addTodo,
	toggleTodoWindow,
	changeTitleText,
	changeReminderTimeText,
})(withRouterContainer);
