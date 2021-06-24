const Task = ({ task, toggleTask }) => {
	return (
		<>
			<li>
				{task.summary} - <input type='checkbox' defaultChecked={task.isComplete} onChange={toggleTask} />
			</li>
		</>
	)
}

export default Task
