import React from "react";
import Category from "./Category";
import { connect } from "react-redux";
import { removeCategory } from "../../../../redux/reducers/menu-reducer";
import { withRouter } from "react-router";
import { removeAllTodoFromCategory } from "../../../../redux/reducers/todo-items-reducer";
function mapStateToProps(state) {
	return {};
}
let withRouterContainer = withRouter(Category);
export default connect(mapStateToProps, { removeCategory, removeAllTodoFromCategory })(withRouterContainer);
