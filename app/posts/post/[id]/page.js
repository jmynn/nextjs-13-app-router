// 'use server'

import StaticPost from "@/app/_components/UI/StaticPost/StaticPost"
import styles from './page.module.scss'

export async function generateStaticParams(id){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const parsed = await data.json()
    return parsed.map(post => ({id: post.id.toString()}))
}

export const dynamicParams = false

export default async function Page({params: {id}}){
    const [{title, body}] = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then(data => data.json())
    return (
        <div className={styles.card}>
            <h1>Post id - {id}</h1>
            <StaticPost title={title} body={body} />
            <div className={styles.info}>Здесь dynamicParams = false</div>
        </div>
    )
} 
