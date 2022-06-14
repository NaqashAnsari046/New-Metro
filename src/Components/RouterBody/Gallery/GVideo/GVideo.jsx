import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './GVideo.css';

const GVideo = () => {
  return (
    <>
       <div className='bg-light py-5'>
           <Container className='bg-white' id='setsmallGV'>
           <h3>House  Video</h3>
               <Row>
                   <Col md={6} sm={12}>
                        <div id='borGVideo'>
                        <iframe width="100%" height="385" src="https://www.youtube.com/embed/I-s9x1c-ybY?autoplay=1&mute=1&playlist=I-s9x1c-ybY&loop=1" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        </div>
                   </Col>
                   <Col md={6} sm={12}>
                      <div id='GvideoText'>
                          <h3>new metro city kharian</h3>
                          <h6>We Design Your Dream</h6>
                      </div>
                   </Col>
               </Row>
           </Container>
       </div>
    </>
  );
}

export default GVideo;
