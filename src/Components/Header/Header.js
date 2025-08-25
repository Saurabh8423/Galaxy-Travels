import React from "react";
import "./Header.css";
import headerImg from "../../assets/heroImg.webp";

const Header = ({ heading }) => {
  return (
    <section
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <h1>{heading}</h1>
      <p>
        Discover breathtaking journeys beyond imagination. 
        Let us take you to worlds where dreams and adventures collide.
      </p>
    </section>
  );
};

export default Header;
