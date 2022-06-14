import React from 'react';
import "./Topbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Container,Navbar,Nav,} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Topbar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" id='NavbarColor' variant="dark">
            <Container>
            <Navbar.Brand href="#home" id='AJ' className='d-flex align-items-end'> <HomeOutlinedIcon id='homeiconN' />Ahmad Khokhar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1" id='setLink'>
                        <NavLink to='/' exact activeClassName='active_class' className='setbutt'>New Metro City</NavLink>
                        <NavLink to='/agents' exact activeClassName='active_class' className='setbutt'>AGENT</NavLink>
                        <NavLink to="/gallery" activeClassName='active_class' className='setbutt'>GALLERY</NavLink>
                        <NavLink to="/project" activeClassName='active_class' className='setbutt'>PROJECT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </>
  );
}

export default Topbar;
