import React from 'react';
import {Container} from "react-bootstrap";
import Video from '../BodyMain/VideoSet/Video';
import Footer from '../Footer/Footer';
import Sidbar from '../Navbar/Sidebar/Sidbar';
import Topbar from '../Navbar/Topbar/Topbar';
import './Text.css';

const Text = () => {
  return (
    <>
    <Sidbar />
    <Topbar />
       <div className='bg-dark text-center p-5' id='textset'>
           <Container>
               <h1>New Metro City Kharian</h1>
               <h6>Real Estate Agency in Sarai Alamgir</h6> <br />
               <h6 id='time'>Opening at 9:00 AM - 7:00 PM</h6>
           </Container>
       </div>
       <Video />
       <Footer />
    </>
  );
}

export default Text;
