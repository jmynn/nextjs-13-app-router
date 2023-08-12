'use client'
export default function globaError ({error, reset}){
    return (
        <html>
            <body>
                <h1>OOOooopps!!</h1>
                <h4>{error}</h4>
                <button onClick={() => reset()}>refresh</button>
            </body>
        </html>
    )
}
