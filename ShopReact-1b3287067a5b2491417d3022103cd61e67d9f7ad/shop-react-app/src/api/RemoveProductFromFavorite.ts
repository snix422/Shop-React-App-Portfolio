import toast from "react-hot-toast";
import apiClient from "./axiosConfig"
import { IdSchema } from "../schemas/idSchema";

export const removeProductFromFavorite = async (id:number) => {

    const toastId = toast.loading("Usuwanie produktu z ulubionych");

    const parsed = IdSchema.safeParse(id);
    
    if (!parsed.success) {
        toast.error("Nieprawidłowy identyfikator produktu");
        throw new Error("Nieprawidłowy identyfikator produktu");
    }

    try {
        await apiClient.delete(`/wishList/${id}`);
        toast.success("Usunięto produkt z ulubionych", {
            id:toastId
        } );
    } catch (error) {
        toast.error("Wystąpił problem z usuwaniem produktu z listy ulubionych", {
            id:toastId
        })
        throw Error("Błąd z usunięciem usuwania produktu z ulubionych");
    }
}