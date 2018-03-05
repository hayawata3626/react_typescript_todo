import { connect } from 'react-redux'
import TodoList, { StateFromProps, DispatchFromProps } from '../components/TodoList'
import { Dispatch } from 'react-redux';
import { deleteTodo, toggleEditable, editTodo, editDate } from '../actions'
import { State } from '../model/todo';
import { Action } from 'redux';


let mapStateToProps = (state: State):StateFromProps => {
	return {todos: state.todos}
}
const deleteDispatchToProps = (dispatch: Dispatch<Action>):DispatchFromProps => {
  return {
		onDeleteTodo: (id: number) => {dispatch(deleteTodo(id))},
    onToggleTodoEditable: (id: number) => {dispatch(toggleEditable(id))},
		onEditTodo: (id:number, description:string) => (dispatch(editTodo(id, description))),
		onEditDate: (id:number, date:string) => (dispatch(editDate(id, date)))
  }
}

const VisibleTodoList = connect<StateFromProps, DispatchFromProps>(
	mapStateToProps,
	deleteDispatchToProps
)(TodoList)

export default VisibleTodoList
