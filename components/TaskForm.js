import { useState } from 'react'

import styles from '../styles/Home.module.scss'

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
				<input className={styles.inputBox} id='taskInput' type='text' value={taskText} onChange={(e) => setTaskText(e.target.value)} />{' '}
				<button className={styles.btn} type='submit'>Add Task</button>
			</form>
		</div>
	)
}

export default TaskForm
