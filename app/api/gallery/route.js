import { NextResponse } from "next/server"

export async function GET(req){
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/cards.json`)
    const books  = await data.json()
    return NextResponse.json(books)
}
