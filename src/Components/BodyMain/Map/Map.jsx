import React from 'react';
import { Container } from 'react-bootstrap';
import './Map.css';

const Map = () => {
  return (
    <>
      <div className='bg-light' id='mapset'>
          <Container><h1 className='bg-light'>Location :</h1></Container>
          <Container className='backgroundcolor'>
          <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13229.44338472305!2d73.7782867412833!3d32.88160874000786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f994a277f5adf%3A0xe7798d0bad366890!2sMetro%20City%20Kharian!5e0!3m2!1sen!2s!4v1652665400655!5m2!1sen!2s"
           width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
           </iframe>
          </p>
          </Container>
      </div>
    </>
  );
}

export default Map;
