'use client'
import { useContext } from 'react'
import styles from './Navigation.module.scss'
import { navigationRoutes } from '@/data/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../Logo/Logo'
import { FavContext } from '@/app/_providers/FavoritesProvider'
export default function Navigation (){
    const pathname = usePathname()
    const {favs} = useContext(FavContext)
    return (
        <nav className={styles.navigation}>
            <div className={styles.column_left}>
                <div className={styles.logo}><Logo /></div>
                {navigationRoutes.length && navigationRoutes.filter(route => route.href !== '/favorites').map(({href, label}, i) => (<div key={i}><Link href={href} className={href === pathname ? styles.active : undefined}>{label}</Link></div>))}
            </div>
            <div className={styles.column_right}>
                {navigationRoutes.length 
                && navigationRoutes
                .filter(route => route.href === '/favorites')
                .map(({href, label}, i) => (
                    <div key={i}>
                        <Link href={href} className={href === pathname ? styles.active : undefined}>
                            {label}
                            <div className={styles.count}>{favs.length}</div>
                        </Link>
                    </div>))}
            </div>
        </nav>
    )
}
