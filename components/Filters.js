const Filters = ({ filters, toggleShowCompleted }) => {
	return (
		<div>
			<label htmlFor='showCompleted'>
				Show completed? <input id='showCompleted' type='checkbox' checked={filters.showCompleted} onChange={toggleShowCompleted} />
			</label>
		</div>
	)
}

export default Filters
