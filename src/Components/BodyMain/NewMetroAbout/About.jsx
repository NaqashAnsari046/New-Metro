import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import New from '../News/New';
import './About.css';
import AboutApi from './AboutApi'



const About = () => {
  return (
    <div className='bg-light' id='aboutmetrro'>
       <Container className='bg-white'>
           <Row>
               <Col sm={12} md={6} id='setmetrotext'>
                   <div className="card p-5 bg-light">
                       <div className="cardText">
                       <small>ABOUT NEW METRO CITY</small>
                            <h1>We Design Your Dream</h1>
                            <p>New Metro City is an upcoming modern housing project by BSM Developers. The project is 
                                ideally located on main GT road in Tehsil Kharian & Sarai Alamgir in District Gujrat.
                                It is planned to be an upscale housing project which promises highest standards of 
                                development & security, and provision of all modern luxuries and amenities of life to 
                                its residents.
                            </p>
                    <button className='px-5 py-2 bg-dark' id='butAbout'>About new metro city</button>
                       </div>
                   </div>
               </Col>

               <Col sm={12} md={6} id='imgframset'  className=''>
                    <div className="col-md-12 col-12">
                        <div className="row">
                        {
                            AboutApi.map((item)=>{
                                return(
                                    <div className="col-md-6 bg-light pb-3">
                                    <div className="col-md-12" id='imgset'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    </div>
                                );
                            })
                        }
                         </div>
                                                    
                    </div>
               </Col>
           </Row>
       </Container>
       <New />
    </div>
  );
}

export default About;