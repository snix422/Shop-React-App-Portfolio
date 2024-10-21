import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getReviewsByProduct } from "../api/getReviews";
import { sendReviewProduct } from "../api/sendReviewProduct";
import toast from "react-hot-toast";
import { ReviewProduct } from "../types/ReviewProduct";

export const useReviews = (productId: number) => {
    const queryClient = useQueryClient();
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews-query-key', productId],
        queryFn: () => getReviewsByProduct(productId),
        enabled: !!productId
    });

    const addMutation = useMutation({
        mutationFn: sendReviewProduct, 
        onMutate: async (newReview: ReviewProduct) => {
            const toastId = toast.loading("Dodawanie opinii...");
            await queryClient.cancelQueries({ queryKey: ["reviews-query-key", productId] });
            return { toastId };
        },
        onSuccess: (data, newReview, context) => {
            toast.success("Dodano pomyślnie opinię",{id:context?.toastId});
        },
        onError: (err, newReview, context) => {
            toast.error("Wystąpił problem z dodaniem opinii");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews-query-key", productId] });
        }
    });
    return {
        isLoading,
        error,
        reviews: data || [],
        addReview: addMutation.mutate, 
        addReviewLoading: addMutation.isPending,
        addReviewError: addMutation.error 
    };
};