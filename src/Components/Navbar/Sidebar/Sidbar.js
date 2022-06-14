import React from 'react';
import "./Sidebar.css";
import {Navbar,Nav,Container} from "react-bootstrap";

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Sidbar = () => {
 


  return (
    <>
       <Navbar collapseOnSelect expand="lg" variant="dark" id='navH'>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center flex-grow-1">
                        <Nav.Link href="#home">         
                         <PhoneIcon id='mailset' />Call Now : 0302 5442985 <span id='mail'><MailIcon id='mailset' /> AhmadKhokhar289@gmail.com </span>
                        </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/ahmadjamilkhokhar/" id="tollicon"><FacebookIcon id='mediaSet' /> 
                        </Nav.Link>
                        <Nav.Link href='https://www.instagram.com/invites/contact/?i=1dfbs0u4j90lu&utm_content=mvm95wa'><InstagramIcon id='mediaSet' /></Nav.Link>
                        <Nav.Link>
                        <TwitterIcon id='mediaSet' href='https://twitter.com/ahmadkhokhar289?t=pD7aNIEPLA-7Bsd64zoSgg&s=09' />
                        </Nav.Link>
                        <Nav.Link href="https://wa.me/message/JIXY6V3FBNHSF1"><WhatsAppIcon id='mediaSet' /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 

           
    </>
  );
}

export default Sidbar;
