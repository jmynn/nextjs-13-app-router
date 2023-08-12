'use client'
import { useCallback } from 'react'
import styles from './ButtonOpenFav.module.scss'
import { useRouter } from 'next/navigation'
export default function ButtonOpenFav({id}){
    const router = useRouter()
    const handleOpen = useCallback((id) => {
        router.back()
        router.push(`/book/${id}`)
    }, [router])
    return (
        <button className={styles.open} onClick={handleOpen(id)}>
			open fav
		</button>
    )
}
