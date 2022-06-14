import React from 'react';
import {Container} from 'react-bootstrap';
import './Video.css';
import About from '../NewMetroAbout/About';



const Video = () => {
  return (
    <div className='bg-light'>
       {/* start video */}
       <Container id='videoset'>
          <iframe width="100%" height="555" src="https://www.youtube.com/embed/jMlztQ6VoEY?autoplay=1&mute=1&playlist=jMlztQ6VoEY&loop=1"
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
       </Container>
       <About />
    </div>
  );
}

export default Video;
