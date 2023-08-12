'use client'
import Image from 'next/image'
import styles from './CardFav.module.scss'
import Link from 'next/link'
export default function CardFav({id, title, link, children}) {
	return (
		<div className={styles.fav} key={id}>
			<div className={styles.image}>
				<Image src={link} width={100} height={160} alt="fav`s cover" />
			</div>
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className={styles.btns}>
					<Link href={`/book/${id}`} className={styles.open}>
						open fav
					</Link>
					{children}
				</div>
			</div>
		</div>
	)
}
