import React from "react";
import Categories from "./Categories";
import { connect } from "react-redux";
import {
	addCategory,
	categoryWindowTextChange,
	toggleCreateCategoryWindow,
} from "../../../redux/reducers/menu-reducer";
function mapStateToProps(state) {
	return {
		categories: state.menu.categories,
	};
}

export default connect(mapStateToProps, { addCategory, toggleCreateCategoryWindow, categoryWindowTextChange })(
	Categories
);
