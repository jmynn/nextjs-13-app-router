'use client'
import Link from 'next/link';
import styles from './ReadMore.module.scss'
import { HiExternalLink } from "react-icons/hi";
export default function ReadMore ({id}){
    return (
        <Link className={styles.read} href={`/book/${id}`}><HiExternalLink /><span>read more</span></Link>
    )
}


