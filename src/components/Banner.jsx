import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/imgs/banner.jpg';
import { Color } from '../assets/Colors.js';
import arrowImg from "../assets/arrow_anim_01.gif";

const Banner = () => {
  return (
    <Section>
      <img src={bannerImg} alt='hero' className='bannerImage' />
      <div className='bannerContent'>
        <h1>
          I am Aijaz, a Graphic Designer & Creative Director based in kashmir.
        </h1>
        <div className='cornerImage'>
          <img src={arrowImg } alt='arrow' />
        </div>
      </div>
    </Section>
  );
};

export default Banner;
const Section = styled.section`
  height: 130vh;
  position: relative;
  width: 100%;
  max-width: 120rem;
  .bannerImage {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    object-fit: cover;
  }
  .bannerContent {
    position: absolute;
    z-index: 5;
    left: 25rem;
    right: 0;
    bottom: 0;
    h1 {
      font-size: 9rem;
      color: ${Color.seconderyColor};
      line-height: 10rem;
      font-weight: 900;
    }
    .cornerImage {
      height: 15rem;
      border-bottom: 1px solid ${Color.seconderyColor};
      position: relative;
      img {
        /* height: 10rem;
        width: 10rem; */
        position: absolute;
        right: 0;
        bottom: 2.5rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    height: 100vh;

    .bannerContent {
      left: 10rem;

      h1 {
        font-size: 6rem;
        line-height: 7rem;
      }
      .cornerImage {
        height: 15rem;

        img {
          height: 10rem;
          width: 10rem;
          bottom: 2.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: 100vh;

    .bannerContent {
      left: 5rem;
      padding-right: 1rem;

      h1 {
        font-size: 4rem;
        line-height: 1em;
      }
      .cornerImage {
        height: 15rem;

        img {
          height: 10rem;
          width: 10rem;
          bottom: 2.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    height: 120vh;

    .bannerContent {
      left: 2rem;
      padding-right: 1rem;

      h1 {
        font-size: 4rem;
        line-height: 5rem;
      }
      .cornerImage {
        height: 10rem;

        img {
          height: 7rem;
          width: 7rem;
          bottom: 2.5rem;
        }
      }
    }
  }
`;
