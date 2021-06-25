const Task = ({ task, toggleTask, deleteTask }) => {
	return (
		<>
			<li>
				<span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>{task.summary}</span> -{' '}
				<input type='checkbox' defaultChecked={task.isComplete} onChange={() => toggleTask(task.id)} />{' '}
				<button onClick={() => deleteTask(task.id)}>Delete</button>
			</li>
		</>
	)
}

export default Task
