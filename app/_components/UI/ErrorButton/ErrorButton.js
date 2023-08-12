'use client'
import styles from './ErrorButton.module.scss'
export default function ErrorButton (){
    return (
        <div className={styles.errBtn}>
            <h3>Сделай ошибку!</h3>
            <button onClick={() => {throw new Error('захотелось ошибочки')}}>new Error</button>
        </div>
    )
}
