const OPEN = "OPEN";
const OPEN_CATEGORIES = "OPEN-CATEGORIES";
const ADD_CATEGORY = "ADD-CATEGORY";
const REMOVE_CATEGORY = "REMOVE-CATEGORY";
//Для окна создания категории
const TOGGLE_CREATE_CATEGORY_WINDOW = "TOGGLE-CREATE-CATEGORY-WINDOW";
const CATEGORY_WINDOW_TEXT_CHANGE = "CATEGORY_WINDOW_TEXT_CHANGE";
let initialState = {
	isOpened: false,
	isCategoriesOpened: false,
	categories: {
		items: [],
		categoriesCreateWindow: {
			isOpened: false,
			categoryNameText: "",
		},
	},
};
function menuReducer(state = initialState, action) {
	switch (action.type) {
		case OPEN:
			return {
				...state,
				isOpened: !state.isOpened,
			};
		case OPEN_CATEGORIES:
			return {
				...state,
				isCategoriesOpened: !state.isCategoriesOpened,
			};
		case ADD_CATEGORY:
			return {
				...state,
				categories: {
					...state.categories,
					items: [...state.categories.items, state.categories.categoriesCreateWindow.categoryNameText],
					categoriesCreateWindow: { ...state.categories.categoriesCreateWindow, categoryNameText: "" },
				},
			};
		case REMOVE_CATEGORY:
			return {
				...state,
				categories: {
					...state.categories,
					items: state.categories.items.filter((category) => category !== action.categoryName),
				},
			};
		//Для окна создания категории
		case TOGGLE_CREATE_CATEGORY_WINDOW:
			return {
				...state,
				categories: {
					...state.categories,
					categoriesCreateWindow: {
						...state.categories.categoriesCreateWindow,
						isOpened: !state.categories.categoriesCreateWindow.isOpened,
					},
				},
			};
		case CATEGORY_WINDOW_TEXT_CHANGE:
			return {
				...state,
				categories: {
					...state.categories,
					categoriesCreateWindow: {
						...state.categories.categoriesCreateWindow,
						categoryNameText: action.text,
					},
				},
			};
		default:
			return state;
	}
}
export function openMenu() {
	return {
		type: OPEN,
	};
}
export function openCategories() {
	return {
		type: OPEN_CATEGORIES,
	};
}
export function addCategory(name) {
	return {
		type: ADD_CATEGORY,
		name,
	};
}
//Для окна создания категории
export function toggleCreateCategoryWindow() {
	return {
		type: TOGGLE_CREATE_CATEGORY_WINDOW,
	};
}
export function categoryWindowTextChange(text) {
	return {
		type: CATEGORY_WINDOW_TEXT_CHANGE,
		text,
	};
}
export function removeCategory(categoryName) {
	return {
		type: REMOVE_CATEGORY,
		categoryName,
	};
}
export default menuReducer;
