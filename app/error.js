'use client'
export default function error ({error, reset}){
    return (
        <html>
            <body>
                <h1>OOOooopps!! local error</h1>
                <h4>{error}</h4>
                <button onClick={() => reset()}>refresh</button>
            </body>
        </html>
    )
}
