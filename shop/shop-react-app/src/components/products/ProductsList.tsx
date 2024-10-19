import { ProductType } from "../../types/Product"
import ProductCardPlaceholder from "../placeholders/ProductCardPlaceholder"
import React from "react"

type ProductListProps = {
    products: ProductType[],
    isLoading?:boolean,
    error?:any,
    viewFn: (product:ProductType) => React.ReactNode
}

const ProductsList :React.FC<ProductListProps> = ({products,isLoading,error,viewFn}) => {
    if(error) return <p className="text-2xl text-red-500 underline">Wystąpił problem z pobraniem Bestsellerów. Przepraszamy za utrudnienia</p>
    if(isLoading){
        return(
            <div data-testid="placeholder" className="w-full flex flex-wrap justify-center gap-12">
                <ProductCardPlaceholder lines={6} height={400} />
            </div>
        )
    }

    return(
        <div className="flex w-[100vw] flex-wrap justify-center gap-12 pt-12 pb-12">
            {products.map((b:ProductType)=>viewFn(b))}
        </div>
    )

}

export default ProductsList