import Link from 'next/link'
import styles from './Home.module.scss'
import ErrorButton from '../../UI/ErrorButton/ErrorButton'
export default function Home() {
	return (
        <div className={styles.home}>
            <h1>Home page</h1>
            <h2>Здесь параллельные маршруты</h2>
            <Link href={'/banners'}>тык</Link>
            <ErrorButton />
        </div>
    )
}
