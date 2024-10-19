import React from "react"

type CartListProps = {
    cartItems: any[],
    viewFn: (data:any) => React.ReactNode  
}

const CartList :React.FC<CartListProps> = ({cartItems,viewFn}) => {
    return(
        <div className="w-[95%] min-h-[20vh] flex flex-col items-center ">
            {cartItems.map((item:any)=> <div key={item.id}>{viewFn(item)}</div>)}
        </div>
    )
}

export default CartList