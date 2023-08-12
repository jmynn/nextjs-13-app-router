export async function generateStaticParams(){ 
    const arr = ['1', '2', '3', '4', 'test', 'test-slug', 'secret']
    return arr.map(el => ({
        slug: [el]
    }))
}
export const dynamicParams = false
export default function page ({params: {slug}}){
    return (
        <div>Page with slug - {slug}</div>
    )
}
