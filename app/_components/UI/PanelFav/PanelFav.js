'use client'
import styles from './PanelFav.module.scss'
export default function PanelFav({children}){
    return (
        <div className={styles.panel}>
            <div className={styles.title}>FAVoriteS</div>
            {children}
        </div>
    )
}
