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
          <div>
            <h1> I'm Aijaz,</h1>
            <p>
              a passionate Graphic Designer and 3D Visualizer dedicated to
              crafting compelling visual experiences.
            </p>
          </div>
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

    @media only screen and (max-device-width: 890px), (max-width: 890px) {
      gap: 4rem;
    }

    @media only screen and (max-device-width: 440px), (max-width: 440px) {
      gap: 1rem;
    }

    .banner_title_wrapper {
      width: 80%;

      @media only screen and (max-device-width: 768px), (max-width: 768px) {
        width: 100%;
      }

      > div {
        color: #fff;
        h1 {
          font-size: 12rem;
          color: #fff;
          font-weight: 900;

          @media only screen and (max-device-width: 1100px),
            (max-width: 1100px) {
            font-size: 11rem;
          }

          @media only screen and (max-device-width: 950px), (max-width: 950px) {
            font-size: 9rem;
          }

          @media only screen and (max-device-width: 768px), (max-width: 768px) {
            font-size: 7rem;
          }

          @media only screen and (max-device-width: 590px), (max-width: 590px) {
            font-size: 5rem;
          }

          @media only screen and (max-device-width: 440px), (max-width: 440px) {
            font-size: 3.5rem;
          }

        }
        p {
          font-size: 6.8rem;
          color: ${Color.seconderyColor};
          font-weight: 700;
          line-height: 7.5rem;

          @media only screen and (max-device-width: 1100px),
            (max-width: 1100px) {
            font-size: 5.5rem;
            line-height: 6.2rem;
          }

          @media only screen and (max-device-width: 950px), (max-width: 950px) {
            font-size: 4rem;
            line-height: 5rem;
          }

          @media only screen and (max-device-width: 768px), (max-width: 768px) {
            font-size: 3rem;
            line-height: 4rem;
          }

          @media only screen and (max-device-width: 590px), (max-width: 590px) {
            font-size: 2.2rem;
            line-height: 3rem;
          }
          @media only screen and (max-device-width: 440px), (max-width: 440px) {
            font-size: 1.8rem;
            line-height: 2.2rem;
          }

          @media only screen and (max-device-width: 340px), (max-width: 340px) {
            font-size: 1.6rem;
            line-height: 2rem;
          }
        }
      }
    }

    .banner_anim_wrapper {
      align-self: flex-end;
      padding-bottom: 3rem;

      @media only screen and (max-device-width: 600px) {
        padding-bottom: .5rem;
      }

      @media only screen and (max-device-width: 420px) {
        padding-bottom: 1rem;
      }
      img {
        width: 8rem;
        align-self: flex-end;

        @media only screen and (max-device-width: 768px),
          (max-device-width: 768px) {
          width: 6rem;
        }

        @media only screen and (max-device-width: 420px),
          (max-device-width: 420px) {
          width: 5rem;
        }
        @media only screen and (max-device-width: 320px),
          (max-device-width: 320px) {
          width: 4rem;
        }
      }
    }
  }
`;
