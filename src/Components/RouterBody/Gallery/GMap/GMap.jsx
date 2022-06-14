import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import './GMap.css';
import GMapApi from './GMapApi';

const GMap = () => {
  return (
    <>
       <div>
           <Container>
           <h2 className='py-2 text-capitalize' id='cityG'>New Metro city Map</h2>
               <Row>
                   <Col md={6} sm={12}>
                       <div className="card" id='cardGmap'>
                           <div className="cardimgGMAp">
                               <img src="https://www.linkpicture.com/q/IMG-20220517-WA0009.jpg" alt="" />
                           </div>
                       </div>
                   </Col>
                   <Col md={6} sm={12}>
                       <div>
                           {
                               GMapApi.map((item)=>{
                                   return(
                                    <Col>
                                        <div className="card" id='GMcard'>
                                            <div className="cardimgGm">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                    </Col>
                                   );
                               })
                           }
                       </div>
                   </Col>
               </Row>
           </Container>
       </div>
    </>
  );
}

export default GMap;
