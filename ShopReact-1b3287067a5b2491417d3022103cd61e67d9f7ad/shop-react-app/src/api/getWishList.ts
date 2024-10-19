import apiClient from './axiosConfig'; // Zaktualizuj ścieżkę do swojego pliku konfiguracyjnego
import { ProductType } from '../types/Product';
import { wishListSchemaArray } from '../schemas/wishListSchema';
import { PrettyDOMOptions } from '@testing-library/react';
import { ReviewProduct } from '../types/ReviewProduct';

export const getWishList = async (userId: string): Promise<any[]> => {
    const response = await apiClient.get(`/wishList`, {
        params: {
            userId: userId
        }
    });
    const parsed = wishListSchemaArray.safeParse(response.data);
    if(!parsed.success){
        console.error(parsed.error);
        throw new Error("Invalid data structure from API");
    }
    return parsed.data;
};

