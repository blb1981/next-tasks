import Task from './Task'

import styles from '../styles/Home.module.scss'

const TaskList = ({ tasks, toggleTask, deleteTask, filters, tasksRemaining }) => {
	const allDoneMessage =
		tasksRemaining.length > 0
			? `You have ${tasksRemaining.length} ${tasksRemaining.length === 1 ? 'task' : 'tasks'} to do.`
			: 'All done!'
	return (
		<div>
			<h2 className={styles.headline}>Tasks</h2>
			{tasksRemaining.length === 0 && !filters.showCompleted ? (
				<>
					<p>{allDoneMessage}</p>
				</>
			) : (
				<>
					<p>{allDoneMessage}</p>
					{tasks.map((task) => {
						if (!task.isComplete || filters.showCompleted) {
							return <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
						}
					})}
				</>
			)}
		</div>
	)
}

export default TaskList
