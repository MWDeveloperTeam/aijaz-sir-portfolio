import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/imgs/banner.jpg';
import { Color } from '../assets/Colors';

const Banner = () => {
  return (
    <Section>
      <img src={bannerImg} alt='hero' className='bannerImage' />
      <div className='bannerContent'>
        <h1>
          I am Aijaz, a Graphic Designer & Creative Director based in kashmir.
        </h1>
        <div className='cornerImage'>
          <img src='' alt='' />
        </div>
      </div>
    </Section>
  );
};

export default Banner;
const Section = styled.section`
  height: 200vh;
  position: relative;
  bannerImage {
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
    left: 30rem;
    right: 0;
    top: 50rem;
    h1 {
      font-size: 10rem;
      color: ${Color.seconderyColor};
    }
    .cornerImage {
      height: 15rem;
      border-bottom: 1px solid ${Color.seconderyColor};
      position: relative;
      img {
        height: 50px;
        width: 50px;
        position: absolute;
        right: 0;
        bottom: 2.5rem;
      }
    }
  }
`;
