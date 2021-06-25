import { useState, useEffect } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'

import Error from '../components/Error'
import Filters from '../components/Filters'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

import styles from '../styles/Home.module.scss'

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
		<div className={styles.container}>
			<Head>
				<title>NextJS Tasks</title>
			</Head>
			<h1 className={styles.headline}>NextJS Tasks</h1>
			<p>What do you have to do today???</p>
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
