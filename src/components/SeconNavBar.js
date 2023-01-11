import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'
import DarkMood from './DarkMood';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link ,NavLink} from 'react-router-dom';
const SeconNavBar = () => {
    const {  cartQuantity } = useShoppingCart();
  return (
    <>
          <>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} sticky="top" className="nav-bar shadow p-3 mb-5  rounded">
          <Container fluid>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="nav-toggle" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbar-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Items
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link to="/" as={NavLink} className="nav-item px-4 fs-5">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="nav-item px-4 fs-5">
          products
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="nav-item px-4 fs-5">
            About
          </Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* ------------------------- */}
            <Nav className="d-flex flex-row">

                <DarkMood/>
        {cartQuantity > 0 && (
          
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" , background:"transparent", border:"none"}}>
          <Link to="/products">
          
          <i className="fa fa-shopping-cart nav-icon" style={{fontSize:"30px"}}></i>
          </Link>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                top:1,
                left: 30,
                transform: "translate(25%, 25%)",
                fontSize:"12px"
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        
        )}
            </Nav>
          </Container>
        </Navbar>
      ))}
    </>

    </>
  )
}

export default SeconNavBar
