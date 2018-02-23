import * as React from 'react';
import '../css/addtodo.css'

const AddTodo = ({onTodoClick}: any) => {
	let input:any
	return(
		<div>
		<form 
			className="addtodo"
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				onTodoClick(input.value)
				input.value = ""
			}}
		>
			<input
					type="input"
					className="taskName"
					placeholder="タスク名"
					ref={node => {
						input = node
					}}
				/>
			<button type="submit" className="submitButton">Submit</button>
		</form>
	</div>
	)
}

export default AddTodo