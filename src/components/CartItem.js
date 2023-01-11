import React from "react";
import { Stack, Button,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart ,increaseCartQuantity,
    decreaseCartQuantity} = useShoppingCart();
    
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  
  return (
    <div>

    <div  gap={2} className="d-flex flex-sm-row flex-column align-items-center justify-content-sm-between justify-content-center my-2">
  <div className="d-flex align-items-center my-5 my-sm-1">

    <Link to={`/product/${id}`}>

      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Link>
      <div className="mx-3">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
  </div>

<div className="d-flex align-items-center">

      <div>{FormatCurrency(item.price * quantity)}</div>
      <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button variant="outline-danger" className="rounded-circle text-center fw-bold"
        size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
              
                  <span className="fs-6">{quantity} in cart</span>
                
                <Button variant="outline-success" className="rounded-circle text-center fw-bold"  size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
      </div>

      <Button
        variant="outline-danger"
        className="ml-1"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
</div>
    </div>
<hr/>
    </div>
  );
};

export default CartItem;
