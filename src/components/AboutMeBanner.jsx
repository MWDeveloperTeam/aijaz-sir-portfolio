import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";

const AboutMeBanner = () => {
  return (
    <AboutBanner>
      <div className="about_banner_img_wrapper">
        <img
          src="https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/image-4BR9XSS.jpg"
          alt="Image"
        />
        <h1>I am Aijaz Ahmad, a Graphic Designer & Creative Director</h1>
      </div>
    </AboutBanner>
  );
};

export default AboutMeBanner;

const AboutBanner = styled.div`
  padding: 8rem 0;
  position: relative;

  .about_banner_img_wrapper {
    img {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    font-size: 14rem;
    white-space: nowrap;
    position: absolute;
    bottom: 6rem;
    animation: about_animation 25s linear infinite ;
    font-weight: 900;

    @media only screen and (max-width: 768px) {
        font-size: 10rem;
        animation: about_animation 15s linear infinite ;
    }
  }

  @keyframes about_animation {
    0% {
        transform: translateX(140rem);
    }

    100% {
        transform: translateX(-420rem);
    }
  }

  @media only screen and (max-width: 768px) {
    @keyframes about_animation {
    0% {
        transform: translateX(40rem);
    }

    100% {
        transform: translateX(-300rem);
    }
  }
    }
`;
