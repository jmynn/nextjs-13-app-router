import Image from 'next/image'
import styles from './CardBodyModal.module.scss'
export default function CardBodyModal({children, link, title, author, description}){
    return (
        <>
            <div className={styles.image}>
                <Image src={link} width={300} height={500} alt='card image'/>
            </div>
            <div className={styles.aside}>
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div className={styles.btn}>
                    {children}
                </div>
            </div>
        </>
    )
}
