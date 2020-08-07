import React from "react";
import "../../../styles/pages/settings/settings.scss";
function Settings({ settings, changeTheme }) {
	function changeThemeClick(e) {
		changeTheme(e.target.value);
	}
	return (
		<main className="container">
			<div className="settings__change-theme-block">
				<label htmlFor="themes">Select theme</label>
				<select
					onChange={(e) => changeThemeClick(e)}
					value={settings.theme}
					name="themes"
					id="themes"
				>
					<option value="dark">Dark</option>
					<option value="light">Light</option>
				</select>
			</div>
		</main>
	);
}
export default Settings;
