import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "../../redux/reducers/settings-reducer";
import Settings from "./Settings";
function mapStateToProps(state) {
	return {
		settings: state.settings,
	};
}
export default connect(mapStateToProps, { changeTheme })(Settings);
