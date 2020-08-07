import React from "react";
import Message from "../../Message";
import CategoryContainer from "./Category/CategoryContainer";
function Categories({ categories, addCategory, toggleCreateCategoryWindow, categoryWindowTextChange }) {
	function toggleCreateCategoryWindowClick() {
		toggleCreateCategoryWindow();
	}
	function categoryWindowTextChaneEvent(e) {
		categoryWindowTextChange(e.target.value);
	}
	function addCategoryClick() {
		addCategory();
		toggleCreateCategoryWindow();
	}
	return (
		<>
			{categories.items.map((category, index) => {
				return <CategoryContainer key={index} category={category} />;
			})}
			<button onClick={toggleCreateCategoryWindowClick} className="default-btn add-category-btn">
				+
			</button>
			<Message todoWindow={categories.categoriesCreateWindow} toggleWindow={toggleCreateCategoryWindow}>
				<div className="message__header">
					<h2>Create Todo</h2>
				</div>
				<div className="message__body">
					<input
						onChange={(e) => categoryWindowTextChaneEvent(e)}
						value={categories.categoriesCreateWindow.categoryNameText}
						type="text"
						placeholder="Category name"
					/>
					<button onClick={addCategoryClick} className="bg-btn">
						Add
					</button>
				</div>
			</Message>
		</>
	);
}
export default Categories;
