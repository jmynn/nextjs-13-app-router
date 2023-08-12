import { FavoritesProvider } from "./FavoritesProvider";

export default function Providers({ children }){
    return (
        <FavoritesProvider>
            {children}
        </FavoritesProvider>
    )
}