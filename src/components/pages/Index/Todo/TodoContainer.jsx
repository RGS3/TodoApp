import {
	removeTodo,
	toggleComplete,
} from "../../../redux/reducers/todo-items-reducer";
import Todo from "./Todo";
import { connect } from "react-redux";

function mapStateToProps(state) {
	return {};
}
export default connect(mapStateToProps, { toggleComplete, removeTodo })(Todo);
