'use client'
import { useCallback, useDeferredValue, useEffect, useState } from 'react'
import styles from './Posts.module.scss'
import Post from '../../UI/Post/Post'
import Container from '../../UI/Container/Container'
import Fallback from '../../UI/Fallback/Fallback'
import dynamic from 'next/dynamic'


const ContainerPosts = dynamic(() => import('../../UI/AllPosts/AllPosts'), {
  ssr: false, 
  loading: () => <Fallback />
})

export default function Posts({ServerComponent}) {
	const [posts, setPosts] = useState([])
	const [query, setQuery] = useState("")
	const deffered = useDeferredValue(posts)
  // fetcher излишен здесь, в эффект надо было запихнуть
	const fetcher = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const parsed = await data.json()
    setPosts(parsed)
  }, [])

	// useEffect(() => fetcher(), [])

  useEffect(() => {
    if(query.length > 0){
      setPosts(prev => [...prev].filter(post => post.title.includes(query) || post.body.includes(query)))
    } else fetcher()
  }, [query, fetcher])

	return (
    <Container>
      <h1 className={styles.title}>Здесь применен next/dynamic + useDeferredValue</h1>
      <div className={styles.searchbar}>
        <label>
          Поиск по постам:
          <input name="search-post" placeholder='Введите текст' onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>
        <ContainerPosts>
          { deffered.map(post => <Post key={post.id} {...post} />) }
        </ContainerPosts>
    </Container>
	)
}
