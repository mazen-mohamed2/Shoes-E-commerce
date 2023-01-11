import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

const SingleProduct = () => {
  const {
  
    addToCart,
  
  } = useShoppingCart();
  const {id}=useParams()

  const item = storeItems[id-1]
  console.log(item);
  return (
    <div>
        <Container className='my-5'>
      <Row md={2} xs={1} lg={2}>
        <Col>
    
      
          <img src={item.imgUrl} style={{width:'60vh'}}/>
          
        </Col>
        
        <Col className="d-flex align-items-start justify-self-start  flex-column ">
        <h1 className='text-start'>

        {item.name} 
        </h1>

        <br/>
        <h4>${item.price}</h4>
        <p>

        {item.desc}
        </p>
        <Button onClick={() => addToCart(item.id)}>Add to cart</Button>
        
        </Col>

      </Row>
    </Container>
    </div>
  )
}

export default SingleProduct