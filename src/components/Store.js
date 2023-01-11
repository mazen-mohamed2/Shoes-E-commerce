import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>
      <h1 className=" text-center   my-3 mt-5"><span className="fw-bold text-info">Our</span> Product</h1>
      <Container>

      <Row sm={2} xs={1} lg={4} className="g-1 d-flex justify-content-center">
        {storeItems.map((item) => (
          <Col key={item.id} className="my-3" >
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
};

export default Store;
