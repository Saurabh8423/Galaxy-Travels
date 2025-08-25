import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/HomeStyles.css";

import img1 from "../../../assets/Services1.webp";
import img2 from "../../../assets/galaxy2.webp";
import img3 from "../../../assets/galaxy3.webp";
import img4 from "../../../assets/galaxy5.jpg";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, //tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="services">
      <h1 className="heading">Our Services</h1>
      <Slider {...settings}>
        <div className="service-card">
          <img src={img1} alt="Services 1" />
          <h2>Galactic Tours</h2>
        </div>
        <div className="service-card">
          <img src={img2} alt="Service 2" />
          <h2>Planet Exploration</h2>
        </div>
        <div className="service-card">
          <img src={img3} alt="Service 3" />
          <h2>Space Cruise</h2>
        </div>
        <div className="service-card">
          <img src={img4} alt="Service 4" />
          <h2>Asteroid Mining</h2>
        </div>
      </Slider>
    </section>
  );
};

export default Services;
