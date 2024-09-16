import React from "react";
import styled from "styled-components";
import AboutBannerImg from "../assets/imgs/banner_image.webp";

const AboutMeBanner = () => {
  return (
    <AboutBanner>
      <div className="about_banner_img_wrapper">
        <img src={AboutBannerImg} alt="Image" />
        <h1>
          I'm <i>Aijaz</i>, a passionate Graphic Designer and 3D Visualizer
        </h1>
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
    animation: about_animation 30s linear infinite;
    font-weight: 900;

    @media only screen and (max-width: 768px) {
      font-size: 10rem;
      animation: about_animation 15s linear infinite;
    }

    @media only screen and (max-width: 440px) {
      font-size: 8rem;
      animation: about_animation 15s linear infinite;
    }
  }

  @keyframes about_animation {
    0% {
      transform: translateX(calc(1200px + 680px));
    }
    100% {
      transform: translateX(calc(-100% + -680px));
    }
  }

  /* 1920 */
  @media only screen and (max-width: 1920px) {
    @keyframes about_animation {
      0% {
        transform: translateX(calc(1200px + 360px));
      }

      100% {
        transform: translateX(calc(-100% + -360px));
      }
    }
  }

  /* 1440 */
  @media only screen and (max-width: 1440px) {
    @keyframes about_animation {
      0% {
        transform: translateX(calc(1200px + 120px));
      }

      100% {
        transform: translateX(calc(-100% + -120px));
      }
    }
  }

  /* 1440 */
  @media only screen and (max-width: 1024px) {
    @keyframes about_animation {
      0% {
        transform: translateX(1024px);
      }

      100% {
        transform: translateX(calc(-100%));
      }
    }
  }

  /* 768px */
  @media only screen and (max-width: 768px) {
    @keyframes about_animation {
      0% {
        transform: translateX(768px);
      }

      100% {
        transform: translateX(calc(-100%));
      }
    }
  }

  /* 425px */
  @media only screen and (max-device-width: 425px) {
    @keyframes about_animation {
      0% {
        transform: translateX(425px);
      }

      100% {
        transform: translateX(calc(-100%));
      }
    }
  }

  /* 375px */
  @media only screen and (max-device-width: 375px) {
    @keyframes about_animation {
      0% {
        transform: translateX(375px);
      }

      100% {
        transform: translateX(calc(-100%));
      }
    }
  }

  /* 320px */
  @media only screen and (max-device-width: 320px) {
    @keyframes about_animation {
      0% {
        transform: translateX(320px);
      }

      100% {
        transform: translateX(calc(-100%));
      }
    }
  }
`;
