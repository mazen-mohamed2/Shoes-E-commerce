import React from "react";
import {  Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import storeItems from "../data/items.json";

const ShoppingCart = () => {
  const {  cartItems } = useShoppingCart();

  return (
  
        <Stack gap={3} xs={1} lg={2} className="mx-5 my-5 pb-5">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className=" ms-auto fw-bold fs-5 ">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
  );
};

export default ShoppingCart;
