'use client'
import styles from './CloseModalButton.module.scss'
import { HiOutlineX } from "react-icons/hi"
export default function CloseModalButton ({handleClick}){
    return (
        <div className={styles.close}>
            <div className={styles.btn} onClick={e => {
                e.stopPropagation()
                handleClick()
            }}>
                <HiOutlineX />
            </div>
        </div>
    )
}
