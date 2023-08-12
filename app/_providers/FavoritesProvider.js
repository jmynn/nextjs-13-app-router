'use client'
import { createContext, useCallback, useState } from "react";

export const FavContext = createContext([])
export function FavoritesProvider({children}){
    const [favs, setFavs] = useState([])
    const hasFav = useCallback((id) => {
        return [...favs].indexOf(Number(id)) !== -1
    }, [favs])
    return <FavContext.Provider value={{favs, setFavs, hasFav}}>
        {children}
    </FavContext.Provider>
}