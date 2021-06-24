import { useState } from 'react'

const TaskForm = ({ addTask }) => {
	const [taskText, setTaskText] = useState('')
	const onAddTask = (e) => {
		e.preventDefault()
		addTask(taskText)
		setTaskText('')
	}

	return (
		<div>
			<form onSubmit={onAddTask}>
				<input id='taskInput' type='text' value={taskText} onChange={(e) => setTaskText(e.target.value)} />{' '}
				<button type='submit'>Add Task</button>
			</form>
		</div>
	)
}

export default TaskForm
