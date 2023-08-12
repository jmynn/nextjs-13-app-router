import Link from 'next/link'
import styles from './Blog.module.scss'
const routes = ['1', '2', '3', '4', 'test', 'test-slug', 'secret']
const nf = ['5', 'f', 'something', 'test-find']
export default function Blog (){
    return (
        <div className={styles.blog}>
            <h1>Blog</h1>
            <h3>All generateStaticParams routes</h3>
            <div className={styles.routes}>
                {routes.map((route, i) => <Link key={i} href={`/blog/${route}`}>/blog/{route}</Link>)}
            </div>
            <h4>not-found generateStaticParams routes</h4>
            <div className={styles.routes}>
                {nf.map((route, i) => <Link key={i} href={`/blog/${route}`}>/blog/{route}</Link>)}
            </div>
        </div>
    )
}
