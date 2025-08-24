import React from 'react'

const About = ({heading}) => {
  return (
    <>
      <h1 className='heading'>{heading}</h1>
        <section className='about'>
            <img src={require("../../../assets/aboutimg.jpg")} alt="" />
            <div className='content'>
                <h2>Our Mission</h2>
                <p>We are the pioneers in intergalactic travel, offering unparalleled experiences across the universe. Our mission is to make space travel accessible, safe, and unforgettable for everyone. Join us as we explore new frontiers and create memories that are truly out of this world!
                </p>
                <p>Our team of experts is dedicated to providing you with the highest level of service and support throughout your journey. We believe that space travel should be an adventure for all, and we are committed to making that a reality.
                </p>
            </div>
        </section>
    </>
  )
}

export default About;
