import { useState } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'

import Error from '../components/Error'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const HomePage = () => {
	const [tasks, setTasks] = useState([])
	const [error, setError] = useState('')

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

	return (
		<div>
			<Head>
				<title>Next Tasks</title>
			</Head>
			<h1>Next Tasks</h1>
			<Error error={error} />
			<TaskForm addTask={addTask} />
			<TaskList toggleTask={toggleTask} deleteTask={deleteTask} tasks={tasks} />
		</div>
	)
}

export default HomePage
