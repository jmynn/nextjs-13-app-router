'use client'
import { useContext } from 'react';
import styles from './Like.module.scss'
import { FavContext } from '@/app/_providers/FavoritesProvider';
import PatternAddedFavButton from '../PatternAddedFavButton/PatternAddedFavButton';
import PatternAddToFavs from '../PatternAddToFavs/PatternAddToFavs';
export default function Like({id}){
    const {favs, setFavs, hasFav} = useContext(FavContext)
    return (
        <button className={styles.like} onClick={() => { if(!hasFav(id)) setFavs(prev => [...prev, Number(id)]) }}>
            { !hasFav(id) ? 
                <PatternAddToFavs />
                :  <PatternAddedFavButton />
            }
        </button>
    )
}
