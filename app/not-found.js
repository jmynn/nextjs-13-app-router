import Link from "next/link"

export default async function NotFound (){
    return (
        <div className="nf">
            <h1 className="nfTitle">not-found page for /blog/[...slug] into root folder 'app'</h1>
            <p>
                notFound page was created special for test /blog/[...slug] because **dynamicParams = false**
            </p>
            <Link href={'/blog'} className="nfBack">back to blog</Link>
        </div>
    )
}
