import { useState } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'

import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const HomePage = () => {
	const [tasks, setTasks] = useState([])

	const addTask = (task) => {
		setTasks((prevState) => [
			...prevState,
			{
				id: uuidv4(),
				summary: task,
				isComplete: false,
			},
		])
	}

	const toggleTask = (task) => {
    console.log(task)
		// setTasks((prevState) => [
		// 	...prevState,
		// 	{
		// 		...task,
		// 		isComplete: !task.isComplete,
		// 	},
		// ])
	}

	return (
		<div>
			<Head>
				<title>Next Tasks</title>
			</Head>
			<h1>Next Tasks</h1>
			<TaskForm addTask={addTask} />
			<TaskList toggleTask={toggleTask} tasks={tasks} />
		</div>
	)
}

export default HomePage
