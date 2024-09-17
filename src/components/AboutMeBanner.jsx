import React from "react";
import styled from "styled-components";
import AboutBannerImg from "../assets/imgs/BannerImgs.webp";

const AboutMeBanner = () => {
  return (
    <AboutBanner>
      <div className="about_banner_img_wrapper">
        <img src={AboutBannerImg} alt="Image" />
        {/* <h1>
          I'm <i>Aijaz</i>, a passionate Graphic Designer and 3D Visualizer
        </h1> */}
      </div>
    </AboutBanner>
  );
};

export default AboutMeBanner;

const AboutBanner = styled.div`
  padding: 8rem 0;
  .about_banner_img_wrapper {
    background-color: #ffffff;
    img {
      width: 100%;
      height: auto;
      /* object-fit: cover; */
    }
  }
`;
