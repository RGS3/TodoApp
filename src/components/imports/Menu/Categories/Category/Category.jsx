import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../../../../../styles/imports/categories/category.scss";
import deleteIcon from "../../../../../media/images/delete.svg";
function Category({ category, removeCategory, removeAllTodoFromCategory, ...props }) {
	function removeCategoryClick() {
		removeCategory(category);
		removeAllTodoFromCategory(category);
		props.history.push("/");
	}
	return (
		<div className="category flex-container">
			<NavLink to={`/categories/${category}`}>{category}</NavLink>
			<button onClick={removeCategoryClick} className="default-btn">
				<img className="animated-icon small-icon" src={deleteIcon} alt="Delete" />
			</button>
		</div>
	);
}
export default Category;
