import { useState, useEffect } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'

import Error from '../components/Error'
import Filters from '../components/Filters'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const HomePage = () => {
	const [tasks, setTasks] = useState([])
	const [tasksRemaining, setTasksRemaining] = useState(0)
	const [error, setError] = useState('')
	const [filters, setFilters] = useState({
		showCompleted: false,
	})

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => task.isComplete === false))
	}, [tasks])

	const addTask = (task) => {
		if (task === '') {
			setError('Task summary cannot be blank. Try again.')
			return
		}
		setTasks((prevState) => [
			...prevState,
			{
				id: uuidv4(),
				summary: task,
				isComplete: false,
			},
		])
		setError('')
	}

	const toggleTask = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				task.isComplete = !task.isComplete
			}
			return task
		})
		setTasks(newTasks)
	}

	const deleteTask = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId)
		setTasks(newTasks)
	}

	const toggleShowCompleted = () => {
		setFilters((prevState) => {
			return {
				...prevState,
				showCompleted: !prevState.showCompleted,
			}
		})
	}

	return (
		<div>
			<Head>
				<title>Next Tasks</title>
			</Head>
			<h1>Next Tasks</h1>
			<Error error={error} />
			<TaskForm addTask={addTask} />
			<Filters filters={filters} toggleShowCompleted={toggleShowCompleted} />
			<TaskList
				filters={filters}
				toggleTask={toggleTask}
				deleteTask={deleteTask}
				tasks={tasks}
				tasksRemaining={tasksRemaining}
			/>
		</div>
	)
}

export default HomePage
