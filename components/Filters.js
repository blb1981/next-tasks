import styles from '../styles/Home.module.scss'

const Filters = ({ filters, toggleShowCompleted }) => {
	return (
		<div>
			<label htmlFor='showCompleted'>
				Show completed?{' '}
				<input
					className={styles.checkbox}
					id='showCompleted'
					type='checkbox'
					checked={filters.showCompleted}
					onChange={toggleShowCompleted}
				/>
			</label>
		</div>
	)
}

export default Filters
