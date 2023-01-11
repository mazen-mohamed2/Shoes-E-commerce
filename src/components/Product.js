import React from 'react'
import { Stack } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from './ShoppingCart';
const Product = () => {
  const {  cartItems } = useShoppingCart();
  return (
    <Stack className="total mx-5 pb-5" >
    {cartItems?.length>0?
    (
      <div>
    <ShoppingCart/>

      </div>
    )
    :(
      <Stack gap={3}  className="mx-5 my-5 py-5">
      <h1 className='text-center '>

        There is no product to show
      </h1>
      </Stack>
    )}
    </Stack>
  )
}

export default Product
