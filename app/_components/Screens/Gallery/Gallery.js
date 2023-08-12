import styles from './Gallery.module.scss'
import Card from '../../UI/Card/Card'
import { getAll } from '@/app/_services/gallery.service'
export default async function Gallery (){
    const cards = await getAll()
    return (
        <div className={styles.gallery}>
            <div className={styles.cards}>
                {cards.length && cards.map((data, i) => <Card key={i} {...data}/>)}
            </div>
        </div>
    )
}
