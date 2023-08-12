'use server'
import styles from './StaticPost.module.scss'

export default async function StaticPost({title, body}){
  return(
    <div className={styles.post}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
    </div>
  )
}