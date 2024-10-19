import apiClient from "./axiosConfig"
import { ProductType } from "../types/Product"
import {toast} from 'react-hot-toast'
import { ReviewProduct } from "../types/ReviewProduct";
import { wishListSchema } from "../schemas/wishListSchema";

export const sendProductToFavorite = async (product: any) : Promise<void> => {
    const toastId = toast.loading('Dodawanie produktu do ulubionych...');
    const parsed = wishListSchema.safeParse(product);
    if(!parsed.success){
        toast.error("Nieprawidłowy dane produktu");
        throw new Error("Nieprawidłowy dane produktu");
    }
    try{
        if(!product.userId){
            toast.error("Niezalogowany użytkownik nie może dodać produktu do ulubionych",{
                id:toastId
            })
            throw new Error("Niezalogowany użytkownik nie może dodać produktu do ulubionych")
        }
        await apiClient.post("/wishList", product);
        toast.success("Produkt został dodany do ulubionych", {
            id:toastId
        })
    }catch(err){
        const error = err as Error;
        if (error.message.includes('Niezalogowany użytkownik')) {
            toast.error('Niezalogowany użytkownik nie może dodać produktu do ulubionych', {
                id: toastId
            });
        }else{
            toast.error("Wystąpił błąd z dodaniem produktu do ulubionych",{
                id:toastId
            })
        }
        throw Error("Problem z dodaniem produktu do ulubionych")
    }
}