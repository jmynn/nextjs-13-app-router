'use client'
import { useRouter } from 'next/navigation'
import CloseModalButton from '../../UI/CloseModalButton/CloseModalButton'
import styles from './AsideFav.module.scss'
import { useCallback, useContext, useEffect, useState } from 'react'
import { FavContext } from '@/app/_providers/FavoritesProvider'
import CardFav from '../../UI/CardFav/CardFav'
import PanelFav from '../../UI/PanelFav/PanelFav'
import BodyFav from '../../UI/BodyFav/BodyFav'
import { getAll } from '@/app/_services/gallery.service'
import ButtonRemoveFav from '../../UI/ButtonRemoveFav/ButtonRemoveFav'
export default function AsideFav(){
	const {favs, setFavs, hasFav} = useContext(FavContext)
    const [cards, setCards] = useState([])

    const router = useRouter()
    const onClose = useCallback(() => router.back(), [router])
    const handleClick = useCallback(() => onClose(), [onClose])
    const onRemove = useCallback((id) => setFavs(prev => [...prev].filter(item => item !== Number(id))), [])

    useEffect(() => { 
        const f = async () => {
            const res = await getAll()
            const filtered = [...res].filter(({ id }) => hasFav(id))
            setCards(filtered)
        }
        if(cards.length > 0) {
            setCards(prev => [...prev].filter(({ id }) => hasFav(id)))
        }
        else f()
    }, [favs, cards.length])

    const onKeyDown = useCallback((e) => {
        if(e.key == 'Escape') onClose()
    }, [onClose])
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = 'auto'
    }, [])
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () =>  document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    return (
        <div className={styles.backdrop} onClick={handleClick}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <PanelFav> 
                    <CloseModalButton handleClick={handleClick}/>
                </PanelFav>
                <BodyFav> 
                    {cards.map((card) => (
                        <CardFav key={card.id} {...card}>
                            <ButtonRemoveFav handleClick={() => onRemove(card.id)}/>
                        </CardFav>        
                    ))}
                </BodyFav>
            </div>
        </div>
    )
}
