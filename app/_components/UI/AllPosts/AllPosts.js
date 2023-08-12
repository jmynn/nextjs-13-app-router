import styles from './AllPosts.module.scss'
export default function AllPosts({children}){
  return(
    <div className={styles.posts}>
      {children}
    </div>
  )
}