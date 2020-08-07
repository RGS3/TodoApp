const CHANGE_THEME = "CHANGE-THEME";
let initialState = {
	theme: "dark",
};
function settingsReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				theme: action.theme,
			};
		default:
			return state;
	}
}
export function changeTheme(theme) {
	return {
		type: CHANGE_THEME,
		theme,
	};
}
export default settingsReducer;
