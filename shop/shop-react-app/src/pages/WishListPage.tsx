import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ProductType } from "../types/Product";
import ProductsList from "../components/products/ProductsList";
import ProductCard from "../components/products/ProductCard";
import Heading from "../components/Headings/Heading";
import useWishList from "../hooks/useWishList";
import useAuth from "../hooks/useAuth";
import WishList from "../components/wishlist/WishList";
import WishListItem from "../components/wishlist/WishListItem";
import ProductCardPlaceholder from "../components/placeholders/ProductCardPlaceholder";
import WishListItemPlaceholder from "../components/placeholders/WishListItemPlaceholder";
import { Link } from "react-router-dom";


const WishListPage = () => {
    const {user} = useAuth();
    const {isLoading,wishList,removeFromWishList} = useWishList(user?.uid);
    if(isLoading){
        return(
            <div className="w-full flex flex-wrap justify-center gap-12 pt-24">
                <WishListItemPlaceholder lines={6} height={200} />
            </div>
        )
    }
        
    return(
        <main className="w-100 min-h-[100vh] flex flex-col justify-center items-center pt-12">
            {user ? <> <Heading level={1} className="text-4xl font-bold">Lista ulubionych: {String(wishList.length)}</Heading>
            {wishList.length > 0 ? <WishList wishList={wishList} viewFn={(p)=> <WishListItem key={p.id} data={p} removeItem={removeFromWishList} />}/>
            : <Heading level={1} className="text-3xl text-red">Brak ulubionych produktów. Dodaj coś aby tutaj zobaczyć</Heading>}</> 
            : <div className="w-full flex flex-col items-center gap-8">
            <h1>Zaloguj się aby zobaczyć i dodać ulubione</h1>
            <Link className="text-2xl underline" to={'/'}>Kontynuuj zakupy</Link>
            </div> } 
            
        </main>
    )
}

export default WishListPage