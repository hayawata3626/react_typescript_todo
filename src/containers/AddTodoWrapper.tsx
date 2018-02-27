import { connect } from 'react-redux'
import { addTodo, AddTodoAction } from '../actions'
import { Dispatch } from 'react-redux';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => {
  return {
    onTodoClick: (text: string, date:Date) => {
      dispatch(addTodo(text, date))
    }
  }
}

const AddTodoWrapper = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoWrapper
