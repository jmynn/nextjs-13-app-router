'use server'
import styles from './Layers.module.scss'

export default async function Layers(){
  return(
     <div className={styles.layer}>
        <div className={styles.header}>Я импровизированный хэдер</div>
        <div className={styles.main}>
          <h1 className={styles.title}>Я заголовок</h1>
          <p className={styles.text}>
            Я длинный параграф**Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequuntur iste quos harum eos, quod laboriosam, quae voluptatem alias pariatur enim quis. Enim quod praesentium cupiditate, ipsam laboriosam distinctio reiciendis hic soluta quasi laudantium earum debitis quas! In, ipsam repudiandae. Porro, perspiciatis! Beatae unde ut placeat itaque ipsam aliquam ducimus iste! Provident quae fuga est, numquam reiciendis accusamus officiis, recusandae inventore dolores asperiores cum aliquid repudiandae quas adipisci? Dignissimos molestiae accusantium culpa earum, incidunt nam impedit exercitationem modi perspiciatis excepturi alias dolorem sunt officiis fugiat minima dicta, natus dolorum eos quis? Omnis deleniti consequuntur odio iure facere porro, numquam, qui eius ducimus error at dignissimos tenetur. Dolor unde libero ad quibusdam optio quis eos? Reprehenderit dolorum incidunt sint error ratione nemo facilis aspernatur vel molestiae quis placeat tenetur cumque ipsa sunt voluptates debitis quisquam saepe harum, numquam optio fuga impedit quidem. Dolore fugit iste atque molestiae, vel quidem vitae eaque!
          </p>
          <div className={styles.hidden}>Я скрыт по умолчанию, и виден только в вариациях</div>
        </div>
        <div className={styles.footer}>Я импровизированный футер</div>
     </div>
  )
}