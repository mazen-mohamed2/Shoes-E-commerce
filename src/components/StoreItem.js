import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    // getItemQuantity,
    addToCart,
  
  } = useShoppingCart();

  return (
  

    <Card className="card  h-100 w-100 border-0 ">
    <Link to={`/product/${id}`}>

      <Card.Img className="product-card"
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" , backgroundSize:"cover"}}
      />
    </Link>
      <Card.Body className="card-body d-flex flex-column">
        <Card.Title className="card-title d-flex justify-content-between align-items-baseline flex-wrap">
          <span className="fs-6">{name}</span>
          <span className="ms-2 text-muted ">{FormatCurrency(price)}</span>
        </Card.Title>
      
        <div className="add-to-cart" onClick={() => addToCart(id)}>Add to cart</div>
      </Card.Body>
    </Card>
  
  );
};

export default StoreItem;
