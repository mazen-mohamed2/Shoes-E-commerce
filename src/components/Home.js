import React from 'react';
import { Col, Row , Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Img1 from '../images/banner_img_01-removebg-preview.png'
import Img2 from '../images/banner_img_02-removebg-preview.png'
import Img3 from '../images/banner_img_03-removebg-preview.png'
import Carosal from './Carosal';
function Home() {
const best=[
  {img: 'https://technext.github.io/zay-shop/assets/img/category_img_03.jpg', title:'Accessories'},
  {img: 'https://technext.github.io/zay-shop/assets/img/category_img_02.jpg', title:'Accessories'},
  {img: 'https://technext.github.io/zay-shop/assets/img/feature_prod_02.jpg', title:'Accessories'},
]
  return (
    <div className="container-fluid">
  
<Carosal Img1={Img1} Img2={Img2} Img3={Img3}/>

    <div className="my-5">
      <h1 className='text-center my-5' ><span className="fw-bold text-info "> 
       Best 
      </span>{' '}
          products of The Month</h1>
      <Container>

      <Row md={2} xs={1} lg={3} className="d-flex g-2 my-5  justify-content-center ">
      {best.map((item,idx) => (

        <Col key={idx}>
        <Link to="/store">

          <img src={item.img} alt={item.title}  className='rounded-circle w-75 h-75 my-3 mx-4'/>
        </Link>
          <h5 className='mx-5 px-5'>{item.title}</h5>
        </Col>
      ))}
        
      </Row>
      </Container>
    </div>
    </div>
  );
}

export default Home