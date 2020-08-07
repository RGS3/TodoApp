import React from "react";
import App from "./App";
import { connect } from "react-redux";
function mapStateToProps(state) {
	return {
		settings: state.settings,
	};
}
export default connect(mapStateToProps)(App);
