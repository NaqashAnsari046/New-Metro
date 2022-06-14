import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className='bg-light'>
      
    <Container className='bachSet bg-dark'>
               <Row id='fotterLine' className=''>
                 <Col sm={12} md={4}>
                   <h3>Contact</h3>

                   <button id='FButt'>Call Now</button>
                   <h4>03025442985</h4>
                 </Col>
                 <Col sm={12} md={4}>
                 <h3>Address</h3>

                  <button id='FButt'>Get Direction</button>
                  <p>office # main boulevard new metro city
                      Sarai Alamgir, Gujrat, 50000
                      Pakistan
                  </p>
                 </Col>
                 <Col sm={12} md={4}>
                 <div id='footerP'>
                   <p>Welcome to our site, if you need help simply reply to the call, we are online and ready to help</p>
                 </div>
                 </Col>
               </Row>

              <div className='p-2'>
              <row className='ttexta'>
               <small>AhmadKhokhar289@gmail.com</small>
               <small className='secondsmal'>03025442985</small>
               </row>
              </div>
            </Container>
    </div>
    </>
  );
}

export default Footer;
