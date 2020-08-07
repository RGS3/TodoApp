import React from "react";
import "../../styles/imports/message.scss";
function Message({ children, todoWindow, toggleWindow }) {
	function toggleWindowClick(e) {
		if (e.target === e.currentTarget) {
			toggleWindow();
		}
	}
	return (
		<div
			className={`message flex-container ${todoWindow.isOpened ? "opened" : "closed"}`}
			onClick={(e) => {
				toggleWindowClick(e);
			}}
		>
			<div className="message__inner">{children}</div>
		</div>
	);
}
export default Message;
