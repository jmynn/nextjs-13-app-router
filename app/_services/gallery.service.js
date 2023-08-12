export async function getAll(){
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/gallery`)
    const books = await data.json()
    return books
}
export async function getByID(id){
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/gallery`)
    const books = await data.json()
    const book = books.filter(item => item.id == id)
    return book
}