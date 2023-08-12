import Image from 'next/image'
import styles from './Card.module.scss'
import ReadMore from '../ReadMore/ReadMore'
export default function Card ({id, link, title, description}){
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={link} width={230} height={400} alt={'card`s cover'} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <ReadMore id={id}/>
        </div>
    )
}
