import React from 'react';
import GPhotoApi from './GPhotoApi';
import { Container,Row,Col } from 'react-bootstrap';
import './GPhoto.css';


const GPhoto = () => {
  return (
    <>
      <div className='bg-light'>
          <Container>
              <Row className='bg-white py-5 pb-4'>
                  <h2 className='pt-2' id='GpHoue'>HOUSE IMAGE</h2>
              {
                        GPhotoApi.map((item)=>{
                            return(
                                <Col md={4} sm={12} id='GPhoto' className='p-2'>
                                <div className="card" id='CardGPhoto'>
                                    <div className="cardimgGP">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                            </Col>
                            );
                        })
                    }
              </Row>
          </Container>
      </div>
    </>
  );
}

export default GPhoto;
