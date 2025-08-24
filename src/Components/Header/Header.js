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
        backgroundPosition: "fixed",
      }}
    >
      <h1>{heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, id.
      </p>
    </section>
  );
};

export default Header;
