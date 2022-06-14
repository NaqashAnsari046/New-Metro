import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Agent.css';
import AgentApi from './AgentApi';
import Footer from '../../Footer/Footer';
import Sidebar from '../../Navbar/Sidebar/Sidbar';
import AgentText from './AgentText/AgentText';
import Topbar from '../../Navbar/Topbar/Topbar';


const Agent = () => {
  return (
    <>
        <div className='bg-light'> 
            <Sidebar />
            <Topbar />
            <AgentText />
            <Container className='bg-white p-5'>
                <Row>
                    {
                        AgentApi.map((item)=>{
                            return(
                                    <>
                                     <Col sm={12} md={4} className='my-5'>
                                        <div className="card bg-light" id='agent'>
                                            <div className="card-img bg-dark">
                                                <img src={item.img} alt="" />
                                            </div>
                                        <div className="textData py-3">
                                        <div className="agent-name">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="agentnumber">
                                                <h4>Now : <small>{item.call}</small></h4>
                                            </div>
                                            <div className="agentMail">
                                                <h5>Gmail : <small>{item.mail}</small></h5>
                                            </div>
                                            <div className="agentAddress">
                                                <h6><b>Address</b> : <small>{item.Address}</small></h6>
                                            </div>
                                        </div>
                                        </div>
                                          </Col>
                                    </>
                            );
                        })
                    }
                    
                    
                </Row>
            </Container>
            <Footer />
        </div>
    </>
  );
}

export default Agent;
