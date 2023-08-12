'use client'
import { useCallback, useEffect } from 'react'
import styles from './Modal.module.scss'
import { useRouter } from 'next/navigation'
import CloseModalButton from '../CloseModalButton/CloseModalButton'
export default function Modal({children}){ 
    const router = useRouter()

    const onClose = useCallback(() => router.back(), [router])
    const handleClick = useCallback(() => onClose(), [onClose])
    
    const onKeyDown = useCallback((e) => {
        if(e.key === 'Escape') onClose()
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => document.body.style.overflow = 'auto'
    }, [])
    return (
    <div className={styles.modal} onClick={() => handleClick()}>
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
            <CloseModalButton handleClick={handleClick}/>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    </div>
    )
}
