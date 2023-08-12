import Link from 'next/link'
import styles from './Post.module.scss'

export default function Post({id, title, body}){
  return(
    <div className={styles.post}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      <Link href={`/posts/post/${id}`}>go to Post-{id}</Link>
    </div>
  )
}
 