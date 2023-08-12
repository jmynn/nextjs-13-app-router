'use client'
export default function error ({error, reset}){
    return (
        <>
            <div>This is error page for /blog/...slug</div>
            <div>{error}</div>
            <button onClick={() => reset()}>reset</button>
        </>
       
    )
}
