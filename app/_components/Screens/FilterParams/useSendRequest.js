import { usePathname, useRouter } from "next/navigation"
import { useCallback, useMemo, useState } from "react"

export default function useSendRequest(){
    const [posts, setPosts] = useState([])
    const router = useRouter()
    const pathname = usePathname()
    const [queryParams, setQueryParams] = useState({
      filter: null,
      sort: null,
      query: ""
    })
    const fetcher = useCallback(async (form=null, queryParams=null, reset=false) => {
        let params = {
            query : null,
            sort : null,
            filter : null,
        }
        if(form){
            const formData = new FormData(form)
            for(const [key, value] of formData) params[key] = value
        }
        if(queryParams) params = {...queryParams}
        if(reset) params = { query : "", filter : "none", sort : "none" } 
        if(params.query?.length === 0 && (!params.sort || params.sort === "none") && (!params.filter || params.filter === "none") && !queryParams && !reset) return
        const queryParameterQuery = `${params.query && `q=${params.query}`}`
        const queryParameterFilter = `${(params.filter && params.filter !== "none") ? `${params.query && '&'}f=${params.filter}` : ''}`
        const queryParameterSort = `${(params.sort && params.sort !== "none") ? `${(params.query || params.filter && params.filter !== "none") ? '&' : ''}s=${params.sort}` : ''}`
        
        const stringQuery =  `${process.env.NEXT_PUBLIC_URL}/api/posts?${queryParameterQuery}${queryParameterFilter}${queryParameterSort}` 
        const data = await fetch(stringQuery)
        const parsed = await data.json()
        router.replace(`${process.env.NEXT_PUBLIC_URL}${pathname}?${queryParameterQuery}${queryParameterFilter}${queryParameterSort}`)
        setQueryParams({
            query: params.query,
            sort: params.sort,
            filter: params.filter
        })
        setPosts(parsed)
    }, [pathname, router])

    return useMemo(() => ({
        posts, 
        queryParams, 
        setQueryParams,
        fetcher
    }), [posts, queryParams, fetcher])
}
