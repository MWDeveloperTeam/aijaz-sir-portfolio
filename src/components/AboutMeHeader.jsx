import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import arrowImg from "../assets/arrow_anim_01.gif";

const AboutMeHeader = () => {
  return (
    <AboutMeHeaderSection>
      <h1>
        <span>About</span>
        <span>Me</span>
      </h1>
      <p className="about_header_title">
        I'm <span style={{ fontWeight: 900, fontStyle: "italic" }}>Aijaz </span>
        , a passionate graphic designer and 3D visualizer dedicated to crafting
        compelling visual experiences.
      </p>
      <p className="about_disc">
        With over a decade of experience in design, i have established myself as
        a seasoned professional with deep expertise across various design
        disciplines. I have a proven track record of delivering high-quality
        designs that balance aesthetics with functionality, and my ability to
        adapt to evolving design trends underscores my commitment to excellence
        in the field.
      </p>
      <div className="about_icon">
        <img src={arrowImg} alt="arrow" />
      </div>
    </AboutMeHeaderSection>
  );
};

export default AboutMeHeader;

const AboutMeHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  border-bottom: 0.2rem solid #d6d6d6;
  padding-bottom: 6rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }

  h1 {
    font-size: 6rem;
    span:first-child {
      font-weight: 300;
    }

    @media only screen and (max-width: 420px) {
      font-size: 4rem;
    }
  }

  .about_header_title {
    font-weight: 500;
    font-size: 3rem;
    max-width: 70rem;

    @media only screen and (max-width: 1020px) {
      max-width: 50rem;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 420px) {
      font-size: 2.5rem;
    }
  }

  .about_disc {
    font-size: 1.8rem;
    max-width: 70rem;
    line-height: 2.8rem;
    color: ${Color.seconderyColorLight};

    @media only screen and (max-width: 1020px) {
      max-width: 50rem;
    }

    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }

    @media only screen and (max-width: 420px) {
      font-size: 1.6rem;
    }
  }

  .about_icon {
    text-align: right;
    svg {
      position: absolute;
      right: 0;
      bottom: 5rem;
      font-size: 10rem;

      @media only screen and (max-width: 768px) {
        position: initial;
        font-size: 4rem;
      }
    }
  }
`;
