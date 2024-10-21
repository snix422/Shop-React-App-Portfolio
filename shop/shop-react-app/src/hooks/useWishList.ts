import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getWishList } from "../api/getWishList";
import { sendProductToFavorite } from "../api/SendProductToFavorite";
import { removeProductFromFavorite } from "../api/RemoveProductFromFavorite";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useWishList = (userId?:any) => {

    const queryClient = useQueryClient();
    
    const {isLoading,error,data} = useQuery({
        queryKey:['wishlist-query-key',userId],
        queryFn: () => getWishList(userId),
        enabled: !!userId
    })

    const addMutation = useMutation({
        mutationFn: sendProductToFavorite,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["wishlist-query-key",userId]});
        },
        onError: (error) => {
            toast.error("Błąd podczas dodawaniu produktu do ulubionych:")
        }
    });

    const removeMutation = useMutation({
        mutationFn: removeProductFromFavorite,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["wishlist-query-key",userId]});
        },
        onError: (error) => {
            toast.error("Błąd podczas usuwania produktu z ulubionych:")
        }
    });

    useEffect(() => {
        if (userId) {
            queryClient.invalidateQueries({ queryKey: ['wishlist-query-key', userId] });
        }
    }, [userId, queryClient]);

    return {isLoading,error, wishList: data || [], addToWishList: addMutation.mutate, removeFromWishList: removeMutation.mutate}
}

export default useWishList