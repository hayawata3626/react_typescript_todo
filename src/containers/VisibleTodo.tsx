import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { Todo } from "../model/todo";
export interface AddTodoAction {
  todos: Todo[]
}

let mapStateToProps = (state: AddTodoAction) => {
	return {todos: state.todos}
}


const VisibleTodoList = connect(
	mapStateToProps
)(TodoList)

export default VisibleTodoList