import styles from './Fallback.module.scss'
export default function Fallback() {
	return (
		<div className={styles.loading}>
			<div className={styles.arc}></div>
			<div className={styles.arc}></div>
			<div className={styles.arc}></div>
		</div>
	)
}
