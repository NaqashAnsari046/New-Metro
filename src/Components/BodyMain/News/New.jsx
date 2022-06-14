import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import OurMission from '../OurMission/OurMission';
import "./New.css";
import News from './NewApi';

const New = () => {
  return (
    <>
      <div className='bg-light text-center p-4 pb-5'>
      <Container>
           <div className='p-4'>
                <h1>News</h1>
                <p  id='newsmall'>Latest News</p>
           </div>
            <Row>
                            {
                                News.map((item)=>{
                                    return(
                                        <Col md={3} sm={12} id='topset'>
                                        <div className="card">
                                            <div className="cardimg">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="card-date">
                                                <small>{item.date}</small>
                                            </div>
                                            <div className="card-heading">
                                                <h1>{item.heading}</h1>
                                            </div>
                                        </div>
                                        </Col>
                                    );
                                })
                            }
            </Row>
       </Container>
      </div>
      <OurMission />
    </>
  );
}

export default New;
