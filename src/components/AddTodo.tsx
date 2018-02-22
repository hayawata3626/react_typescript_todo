import * as React from 'react';

const AddTodo = ({onTodoClick}: any) => (
	<div className="addtodo">
		<input
				type="input"
				className="taskName"
				placeholder="タスク名"
			/>
		<button className="submitButton" onClick={onTodoClick("テキスト", "sasas")}>Submit</button>
	</div>
)

export default AddTodo