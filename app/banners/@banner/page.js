'use client'

import Fallback from "@/app/_components/UI/Fallback/Fallback"
import dynamic from "next/dynamic"
import { useState, useTransition } from "react"

const LoadingContainer = dynamic(() => import("@/app/_components/UI/AllPosts/AllPosts"), {
    ssr: false,
    loading: () => <Fallback />
})

export default function Page(){
    const [isVisible, setVisibility] = useState(false)
    const [_, startTransition] = useTransition()
    return (
        <>
            <h1>Parallel banner №2</h1>
            <h3>На этой кнопке используется next/dynamic + useTransition</h3>
            <LoadingContainer> 
                <button onClick={() => startTransition(() => setVisibility(prev => !prev))}>Click</button>
                {isVisible && <p>Ты видишь этот параграф, потому что нажал на кнопку!😎</p>}
            </LoadingContainer>
        </>
    )
}








