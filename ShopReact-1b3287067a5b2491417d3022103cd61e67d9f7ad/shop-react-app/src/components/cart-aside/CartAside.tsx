import Drawer from '@mui/material/Drawer';
import Heading from '../Headings/Heading';
import { useAppDispatch, useAppSelector } from '../../hooks/rtk';
import { clearCart, selectCartItems, selectTotalPrice } from '../../redux/slices/CartSlice';
import LabelItemsAmount from './LabelItemsAmount';
import CartList from './CartList';
import CartItem from './CartItem';
import { SetStateAction } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';

type CartAsideProps = {
    isOpenCart: boolean,
    setOpenCart: React.Dispatch<SetStateAction<boolean>>
}

const CartAside : React.FC<CartAsideProps> = ({isOpenCart,setOpenCart}) => {
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();

    return(
        <Drawer open={isOpenCart} onClose={()=>setOpenCart(false)} anchor='right'  PaperProps={{sx:{width:{
            xs: '100vw', 
            sm: '70vw', 
            md: '50vw', 
            lg: '40vw', 
            xl: '30vw',  
          },display:"flex",flexDirection:'column',alignItems:'center',zIndex:10,paddingTop:"20px"}}}>
            <div className='w-[100%] flex flex-col items-center z-10 pt-8 relative'>
           <ArrowBackIosIcon sx={{position:"absolute", left:"2%", top:"2%"}}  color='primary' onClick={()=>setOpenCart(false)} />
            {cartItems.length == 0 ?
                <Heading level={1} className='text-2xl'>Twój koszyk jest pusty</Heading>
                : 
            <div className='w-full flex flex-col items-center gap-4'>
            <Heading level={1} className='text-3xl'>Twój koszyk</Heading>
            <LabelItemsAmount amount={cartItems.length}/>
            <CartList cartItems={cartItems} viewFn={(item)=><CartItem key={item.id} data={item} dispatch={dispatch} />}/>
            <Heading level={2} className='text-2xl font-bold'>Cena: {totalPrice.toFixed(2)}</Heading>
            <button className='bg-blue-400 text-white'>Przejdź do zamówienia</button>
            <button className="bg-red-400 text-white" onClick={()=>dispatch(clearCart())}>Usuń wszystkie</button>
            </div>
            }
            </div>
        </Drawer>
    )

}

export default CartAside