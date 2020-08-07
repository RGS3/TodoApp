import React from "react";
import "../../../styles/imports/menu.scss";
import { NavLink } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
function Menu({ menu, openMenu, openCategories }) {
	function openMenuClick() {
		openMenu();
	}
	function openCategoriesClick(e) {
		openCategories();
	}
	return (
		<div className="menu-full-wrapper">
			<input checked={menu.isOpened} onChange={openMenuClick} id="menu__toggle" type="checkbox" />
			<label className="menu-btn flex-container" htmlFor="menu__toggle">
				<span></span>
			</label>
			<div className="menu-content-wrapper">
				<div className="menu-content flex-container">
					<NavLink to="/">Home</NavLink>
					<div className="categories-wrapper">
						<button onClick={(e) => openCategoriesClick(e)} className="default-btn">
							Categories <span className={menu.isCategoriesOpened ? "opened" : ""}>&#8249;</span>
						</button>
						<div className={`categories flex-container ${menu.isCategoriesOpened ? "opened" : ""}`}>
							<CategoriesContainer />
						</div>
					</div>
					<NavLink to="/settings">Settings</NavLink>
				</div>
			</div>
		</div>
	);
}
export default Menu;
