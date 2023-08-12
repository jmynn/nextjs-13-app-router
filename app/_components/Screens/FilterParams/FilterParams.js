'use client'
import { useDeferredValue, useEffect } from 'react'
import styles from './FilterParams.module.scss'
import Container from '../../UI/Container/Container'
import Fallback from '../../UI/Fallback/Fallback'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import Post from '../../UI/Post/Post'
import FormFilterParams from '../../UI/FormFilterParams/FormFilterParams'
import useSendRequest from './useSendRequest'

const ContainerPosts = dynamic(() => import('../../UI/AllPosts/AllPosts'), {
    ssr: false, 
    loading: () => <Fallback />
})

export default function FilterParams(){
    const {posts, queryParams, setQueryParams, fetcher} = useSendRequest()

	const deffered = useDeferredValue(posts)
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = {
            query : searchParams.get('q') ?? "",
            filter : searchParams.get('f') ?? "none",
            sort : searchParams.get('s') ?? "none",
        }  
        // setQueryParams({
        //     query: params.query,
        //     filter: params.filter,
        //     sort: params.sort
        // })
        fetcher(null, params)
    }, [])


    return (
        <Container>
            <h1 className={styles.title}>Здесь применен next/dynamic + useDeferredValue, поиск по параметрам, custom hook</h1>
            <div className={styles.searchbar}>
               <FormFilterParams handleSubmit={fetcher} queryParams={queryParams} setQueryParams={setQueryParams} />             
            </div>
            <ContainerPosts>
                { deffered.map(post => <Post key={post.id} {...post} />) }
            </ContainerPosts>
        </Container>
    )
}






