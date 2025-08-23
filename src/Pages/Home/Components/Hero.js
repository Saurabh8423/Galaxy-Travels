import React from 'react';
import video from '../../../assets/space.mp4';
import { Link } from 'react-router-dom';
import "../Components/HomeStyles.css";

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>

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

