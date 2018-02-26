import { connect } from 'react-redux'
import TodoList, { StateFromProps, DispatchFromProps } from '../components/TodoList'
import { Dispatch } from 'react-redux';
import { deleteTodo, DeleteTodoAction } from '../actions'
import { State } from '../model/todo';


let mapStateToProps = (state: State):StateFromProps => {
	return {todos: state.todos}
}


const deleteDispatchToProps = (dispatch: Dispatch<DeleteTodoAction>):DispatchFromProps => {
  return {
    onDeleteTodo: (id: number) => {
      dispatch(deleteTodo(id))
		}
  }
}

const VisibleTodoList = connect<StateFromProps, DispatchFromProps>(
	mapStateToProps,
	deleteDispatchToProps
)(TodoList)


export default VisibleTodoList
