import Task from './Task'

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
	return (
		<div>
			<h2>Tasks</h2>
			{tasks.length === 0 ? (
				<>
					<p>No tasks for now!</p>
				</>
			) : (
				<>
					<p>
						You have {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} to do.
					</p>
					{tasks.map((task) => (
						<Task key={task.id} task={task} toggleTask={toggleTask}  deleteTask={deleteTask} />
					))}
				</>
			)}
		</div>
	)
}

export default TaskList
