import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../../assets/space video.mp4';
import "../Components/HomeStyles.css";

const Hero = () => {
    return (
        <div className='hero'>
          <video src={video} autoPlay loop muted></video>

            <div className="content">
                <h1>Travel. Galaxies</h1>
                <p>Your journey starts here</p>

                <div className='buttons'>
                    <Link to="/training">Try Now!</Link>
                    <Link to="/contact">Launch!</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;

