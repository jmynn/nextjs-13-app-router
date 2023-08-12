import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('q')
    const filter = searchParams.get('f')
    const sort = searchParams.get('s')
    
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const parsed = await data.json()
    
    if(!query && !filter && !sort)  return NextResponse.json(parsed)

    const filtered = [...parsed]
            .filter(post => query && query.length > 0 ? (post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())) : true)
            .filter(post => {
                if(filter && filter !== "none"){
                    if(filter === "id25") return post.id > 25
                    if(filter === "id65") return post.id > 65
                } else return true
            })
            .sort((a, b) => (sort && sort != "none") && (sort === "id" ? (a.id > b.id || -1) : sort === "title" ? (a.title > b.title || -1) : null))
    return NextResponse.json(filtered)
}
