import apiClient from './axiosConfig';
import { wishListSchemaArray } from '../schemas/wishListSchema';

export const getWishList = async (userId: string): Promise<any[]> => {
    const response = await apiClient.get(`/wishList`, {
        params: {
            userId: userId
        }
    });
    const parsed = wishListSchemaArray.safeParse(response.data);
    if(!parsed.success){
        throw new Error("Invalid data structure from API");
    }
    return parsed.data;
};

