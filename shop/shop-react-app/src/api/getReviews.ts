import { reviewSchemaArray } from "../schemas/reviewSchema";
import apiClient from "./axiosConfig"

export const getReviewsByProduct = async (idProduct:number):Promise<any> =>  {
    try {
        const res = await apiClient.get("/reviews",{
            params:{
                productId: idProduct
            }
        })
        const parsed = reviewSchemaArray.safeParse(res.data);
        if(!parsed.success){
            throw new Error("Invalid data structure from API");
        }
        return res.data;
    } catch (error) {
        throw("Wystąpił problem z pobraniem opinii");
    }
}