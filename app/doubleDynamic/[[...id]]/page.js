export default function Page({params: {id}}){
    return (
        id ? <h1>Необязательный универсальный сегмент - id ({id.map(i => `/${i}`)})</h1>
        : <h1>Просто page.js, id не был передан</h1>
    )
}
