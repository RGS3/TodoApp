import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/imports/Header";
import "./styles/default/default.scss";
import IndexContainer from "./components/pages/Index/IndexContainer";
import MenuContainer from "./components/imports/Menu/MenuContainer";
import SettingsContainer from "./components/pages/Settings/SettingsContainer";
function App({ settings }) {
	return (
		<div className="App" data-theme={settings.theme}>
			<HashRouter>
				<Header />
				<MenuContainer />
				<Route exact path="/">
					<IndexContainer />
				</Route>
				<Route path="/categories/:category">
					<IndexContainer />
				</Route>
				<Route path="/settings">
					<SettingsContainer />
				</Route>
			</HashRouter>
		</div>
	);
}

export default App;
