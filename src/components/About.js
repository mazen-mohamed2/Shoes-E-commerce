import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import Icon1 from '../images/icon/truck.png'
import Icon2 from '../images/icon/shopping.png'
import Icon3 from '../images/icon/quality.png'
const About = () => {
  const featurs=[
    {icon:Icon1, title:'Fast Delivery', body:'variations of passages of Lorem Ipsum available'},
    {icon:Icon2, title:'Free Shiping', body:'variations of passages of Lorem Ipsum available'},
    {icon:Icon3, title:'Best Quality', body:'variations of passages of Lorem Ipsum available'},
  ]
  return (
    <div>
<h1 className="text-center my-3 mt-5"><span className="fw-bold text-info">Why</span> Shop With Us</h1>
<Container className="d-flex flex-wrap">
  <div sm={3} xs={1}  className="g-1 d-flex justify-content-center flex-md-row flex-column">
  {featurs.map((item,idx)=>(

    <Col key={idx} className="about-card text-center border border-primary mx-1 my-2 my-sm-5 p-5 "  >
      <img src={item.icon} alt={item.title} className="w-25 my-3"/>
      <h3>{item.title}</h3>
      <p className='fs-5'>{item.body}</p>
    </Col>
  ))}
  </div>
</Container>
    </div>
  );
};

export default About;
