import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import arrowImg from "../assets/arrow_anim_01.gif";

const WorkHeader = () => {
  return (
    <WorkHeaderSection>
      <h1>
        <span>Recent</span>
        <span>Work</span>
      </h1>
      <p className="about_disc">
        A Showcase of My Latest 3D Visualisation, Packaging Designs and social
        media advertisements.
      </p>
      <div className="about_icon">
        <img src={arrowImg} alt="arrowImg" />
      </div>
    </WorkHeaderSection>
  );
};

export default WorkHeader;

const WorkHeaderSection = styled.section`
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
    line-height: 2.6rem;
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
