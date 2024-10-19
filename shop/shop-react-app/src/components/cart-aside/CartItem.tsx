import { addToCart, decreaseAmount, removeFromCart } from "../../redux/slices/CartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartItemType } from "../../types/CartItem";
import { AppDispatch } from "../../redux/store";
import React from "react";

type CartItemProps = {
    data:CartItemType,
    dispatch: AppDispatch
}

const CartItem : React.FC<CartItemProps>= ({data,dispatch}) => {
    console.log(data,'produkt w koszyku');
    return(
        <div className="w-[100%] h-[20vh] flex justify-around items-center">
            <img className="w-[20%] h-[60%]" src={data.image} alt={data.name} />
            <span className="text-base">{data.name}</span>
            <div className="flex items-center">
                <AddIcon data-testid="AddIcon" onClick={()=>dispatch(addToCart(data))} />
                <span data-testid="quantity" className="text-xl">{data.amount}</span>
                <RemoveIcon data-testid="RemoveIcon" onClick={()=>dispatch(decreaseAmount(data))} />
            </div>
            <span className="text-base font-bold">{data.price} zł</span>
            <DeleteForeverIcon data-testid="DeleteForeverIcon" onClick={()=>dispatch(removeFromCart(data))} />
        </div>
    )
}

export default CartItem