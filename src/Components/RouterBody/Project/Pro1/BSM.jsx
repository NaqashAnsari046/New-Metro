import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Sidbar from '../../../Navbar/Sidebar/Sidbar';
import Topbar from '../../../Navbar/Topbar/Topbar';
import './BSM.css';

const BSM = () => {
  return (
    <>
    <Sidbar />
    <Topbar />
       <div className='py-5 bg-light'>
           <Container id='setPMain'>
               <h3>bsm developer</h3>
               <Row>
                   <Col md={6} sm={12}>
                       <div className="card" id='cardP'>
                           <div className="cardimgP">
                               <img src="https://th.bing.com/th/id/OIP.K8qxui8Pj6AbM7RxsrRvAAHaDE?pid=ImgDet&rs=1" alt="" />
                           </div>
                       </div>
                   </Col>
                   <Col md={6} sm={12}>
                       <div id='settextP'>
                           <h2>about bsm developer</h2>
                           <h6>    
                                New Metro City a project of BSM Developers own by Malik Bilal Bashir grand son of
                                Malik Riaz Hussain who own by Bharia Town. Malik Bilal Bashir making a very
                                beautiful and modern housing society near Saraialamgir. New metro city offering
                                Residential and Commercial plots on 3 years easy installment plan.New Metro city
                                providing international living standards to people SaraiAlamgir and kharian. 
                                New metro city ideally located on main GT Road between Kharian and Saraialamgir
                                in district Gujrat. New Metro City mostly interacting the Overseas Community
                                who s living District Gujrar. BSM Developers are doing development work in no
                                time.   
                            </h6>
                       </div>
                   </Col>
               </Row>
           </Container>
       </div>
       <Footer />
    </>
  );
}

export default BSM;
