import styles from '../styles/Home.module.scss'

const Task = ({ task, toggleTask, deleteTask }) => {
	return (
		<>
			<li>
				<span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>{task.summary}</span>
				<input className={styles.checkboxTask} type='checkbox' defaultChecked={task.isComplete} onChange={() => toggleTask(task.id)} />{' '}
				<button className={styles.btnTask} onClick={() => deleteTask(task.id)}>
					Delete
				</button>
			</li>
		</>
	)
}

export default Task
