import React from 'react';
import styled from 'styled-components';
import { mailData } from '../../assets/mailData';
import { MdOutlineFacebook } from 'react-icons/md';
import { FaXTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Animation from '../../components/Animation';
import MarqueeText from '../../components/MarqueeText';

const Contact = () => {
  return (
    <ContactSection>
      <h1 className='heading'>
        Contact<span>Me</span>
      </h1>
      <h3 className='smallHeading'>Let's Start a Project together</h3>
      <p className='firstPara'>
        4399-4301 Cesar Chavez, San Francisco, CA 94131 <br />
        415-509-6995
      </p>
      <Link
        className='mail'
        to={`mailto:${mailData.Email}?subject=${mailData.subject}&body=${mailData.body}`}
      >
        {mailData.Email}
      </Link>
      <div className='iconsWrapper'>
        <div className='socialIcons'>
          <Link to={'www.fb.com'}>
            <MdOutlineFacebook />
          </Link>
          <Link to={'www.twitter.com'}>
            <FaXTwitter />
          </Link>
          <Link to={'www.youtube.com'}>
            <FaYoutube />
          </Link>
          <Link to={'www.linkedin.com'}>
            <FaLinkedinIn />
          </Link>
        </div>
        <img src='#' alt='#' />
      </div>
      <div className='animationDiv'>
        <h1>web design video branding ui/ux app video branding web design</h1>
      </div>
      <div className='animationDiv1'>
        <h1>
          Figma Sketch Webflow Photoshop InDesign Illustrator After Effects
          Figma Sketch Webflow Photoshop InDesign Illustrator After Effects
        </h1>
      </div>
      <Animation />
    </ContactSection>
  );
};

export default Contact;
const ContactSection = styled.div`
  /* height: 100vh; */
  color: #fff;
  padding-top: 10rem;
  .heading {
    font-size: 7rem;
    font-weight: 300;
    span {
      font-weight: 800;
    }
    @media only screen and (max-width: 450px) {
      font-size: 5rem;
    }
  }
  .smallHeading {
    margin-top: 5rem;
    font-size: 4rem;
    font-weight: 500;
    @media only screen and (max-width: 450px) {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
  p {
    font-size: 2rem;
    @media only screen and (max-width: 450px) {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
  }
  .firstPara {
    margin-top: 5rem;
  }
  .mail {
    display: block;
    margin-top: 5rem;
    font-size: 1.6rem;
    color: #fff;
    margin-top: 5rem;
  }
  .iconsWrapper {
    border-bottom: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7rem 0;

    .socialIcons {
      a {
        color: #fff;
        margin-right: 4rem;
      }
      font-size: 3rem;
    }
  }
  .animationDiv {
    overflow: hidden;
    h1 {
      font-size: 18rem;
      white-space: nowrap;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ffffff84;
      color: #021526;
      animation: marquee 60s linear infinite;
    }
    @media only screen and (max-width: 450px) {
      h1 {
        font-size: 12rem;
      }
      @keyframes marquee1 {
        0% {
          transform: translateX(-200rem);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    @keyframes marquee {
      0% {
        transform: translateX(0rem);
      }
      100% {
        transform: translateX(-480rem);
      }
    }
  }
  .animationDiv1 {
    overflow: hidden;

    h1 {
      font-size: 10rem;
      white-space: nowrap;
      animation: marquee1 60s linear infinite;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #ffffff84;
      color: #021526;
    }
    @media only screen and (max-width: 450px) {
      h1 {
        font-size: 6rem;
        -webkit-text-stroke-width: 1px;
      }
      @keyframes marquee1 {
        0% {
          transform: translateX(-300rem);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    @keyframes marquee1 {
      0% {
        transform: translateX(-550rem);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
