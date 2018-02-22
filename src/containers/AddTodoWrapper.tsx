import { connect } from 'react-redux'
import { addTodo, AddTodoAction } from '../actions'
import { Dispatch } from 'react-redux';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => {
  return {
    onTodoClick: (text: string) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodoWrapper = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoWrapper
