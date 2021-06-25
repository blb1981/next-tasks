import styles from '../styles/Home.module.scss'

const Error = ({ error }) => {
	return <p className={styles.error}>{error}</p>
}

export default Error
