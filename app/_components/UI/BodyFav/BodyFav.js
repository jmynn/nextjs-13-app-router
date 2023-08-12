'use client'
import styles from './BodyFav.module.scss'
export default function BodyFav({children}){
    return (
        <div className={styles.body}>
            <div className={styles.list}>
                {children}
            </div>
        </div>
    )
}
