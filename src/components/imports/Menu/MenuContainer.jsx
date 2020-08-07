import React from "react";
import Menu from "./Menu";
import { openCategories, openMenu } from "../../redux/reducers/menu-reducer";
import { connect } from "react-redux";
function mapStateToProps(state) {
	return {
		menu: state.menu,
	};
}
export default connect(mapStateToProps, { openMenu, openCategories })(Menu);
