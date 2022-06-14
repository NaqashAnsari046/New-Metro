import React from 'react';
import {Container} from 'react-bootstrap';
import "./Our.css";
import Map from '../Map/Map';

const OurMission = () => {
  return (
    <>
       <div className='bg-light'>
           <Container>
               <div className="text-center" id='ourMission'>
                   <h1>OUR MISSION</h1>
                   {/* <p>We are working with a mission “to attract the best talent to our team and continuously 
                       improving our skills <br /> and our dealings with our clients.” Our realtors always try to
                        work in innovative styles and bring innovations <br /> at regular intervals
                    </p> */}

                    <p> This website offers the quality information you need to make your mind to invest in
                       new metro city kharian, not only that if you are looking to start your new chapter of life and want
                        to live in new metro city first of all we welcome you in new metro city, please feel free to
                         explore our website to check the facilities available in new metro city kharian which include 
                         Banks, Schools, Colleges, Universities, Hospitals.....
                    </p>
               </div>
           </Container>
       </div>
      <Map />
    </>
  );
}

export default OurMission;
