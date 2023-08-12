'use client'
import { useContext } from 'react'
import styles from './Favorites.module.scss'
import useSWR from 'swr'
import { FavContext } from '@/app/_providers/FavoritesProvider'
export default function Favorites (){
    console.log('favorites')
    const {hasFav} = useContext(FavContext)
    const { data: posts, isLoading } = useSWR("/api/gallery", (url) => fetch(url).then(d => d.json()).then(p => [...p].filter(({id}) => hasFav(id))))
    return (
        isLoading ? <div>ffffffffffffffffffffffffff</div> : 
        posts.map(book => <div key={book.id}>{book.title}</div>)
    )
}
