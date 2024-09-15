import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/imgs/banner.jpg";
import { Color } from "../assets/Colors.js";
import arrowImg from "../assets/arrow_anim_01.gif";

const Banner = () => {
  return (
    <Section>
      <div className="image_wrapper">
        <img src={bannerImg} alt="hero" className="bannerImage" />
      </div>
      <div className="banner_content_wrapper">
        <div className="banner_title_wrapper">
          <h1>
            I am Aijaz, a Graphic Designer & Creative Director based in San
            Francisco.
          </h1>
        </div>
        <div className="banner_anim_wrapper">
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </Section>
  );
};

export default Banner;
const Section = styled.section`
  height: auto;
  position: relative;
  border-bottom: 2px solid #fff;

  .image_wrapper {
    img {
      width: 100%;
      height: auto;
    }
  }

  .banner_content_wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 8rem;

    @media only screen and (max-device-width: 950px) {
      gap: 4rem;
    }
    @media only screen and (max-device-width: 700px) {
      gap: 1rem;
    }

    .banner_title_wrapper {
      width: 70%;
      @media only screen and (max-device-width: 950px) {
        width: 100%;
        padding: 0 0 0 10rem;
      }
      @media only screen and (max-device-width: 700px) {
        padding: 0 2rem 0 3rem;
      }
      h1 {
        font-size: 8rem;
        color: #fff;
        font-weight: 900;
        line-height: 11rem;

        @media only screen and (max-width: 1100px) {
          font-size: 7rem;
          line-height: 9rem;
        }

        @media only screen and (max-device-width: 950px) {
          font-size: 5rem;
          line-height: 6.5rem;
        }

        @media only screen and (max-device-width: 700px) {
          font-size: 4rem;
          line-height: 6rem;
        }
        @media only screen and (max-device-width: 550px) {
          font-size: 3rem;
          line-height: 3.8rem;
        }
        @media only screen and (max-device-width: 420px) {
          font-size: 2.5rem;
          line-height: 3rem;
        }
        @media only screen and (max-device-width: 320px) {
          font-size: 2rem;
          line-height: 2.6rem;
        }
      }
    }

    .banner_anim_wrapper {
      align-self: flex-end;
      padding-bottom: 3rem;
      @media only screen and (max-device-width: 420px) {
        padding-bottom: 1rem;
      }
      img {
        width: 8rem;
        align-self: flex-end;

        @media only screen and (max-device-width: 420px) {
          width: 5rem;
        }
        @media only screen and (max-device-width: 320px) {
          width: 4rem;
        }
      }
    }
  }
`;
