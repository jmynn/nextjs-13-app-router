import styles from './ButtonRemoveFav.module.scss'
export default function ButtonRemoveFav({handleClick}){
    return (
        <button className={styles.remove} onClick={handleClick}>remove fav</button>
    )
}
