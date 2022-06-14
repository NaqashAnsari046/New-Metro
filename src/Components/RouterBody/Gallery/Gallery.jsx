import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Sidbar from '../../Navbar/Sidebar/Sidbar';
import Topbar from '../../Navbar/Topbar/Topbar';
import './Gallery.css';
import GalleryApi from './GalleryApi';
import GMap from './GMap/GMap';
import GPhoto from './GPhoto/GPhoto';
import GVideo from './GVideo/GVideo';

const Gallery = () => {
  return (
    <>
    <Sidbar />
    <Topbar />
    <GVideo />
    <GPhoto />
      <div className='bg-light ' id='newSmallSet'>
          <Container className='bg-white pb-5'>
                <Row>
                    <h2 className='pb-1' id='GNew'>News</h2>
                    {
                        GalleryApi.map((item)=>{
                            return(
                                <Col md={3} sm={12} id='topsetG'>
                                <div className="card" id='CardG'>
                                    <div className="cardimgG">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                            </Col>
                            );
                        })
                    }
                </Row>
          </Container>
          <GMap />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
