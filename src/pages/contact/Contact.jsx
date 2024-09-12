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
        <h1>web design video branding ui/ux app video branding</h1>
      </div>
      <Animation />
      <MarqueeText />
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
  }
  .smallHeading {
    margin-top: 5rem;
    font-size: 4rem;
    font-weight: 500;
  }
  p {
    font-size: 2rem;
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
      font-size: 20rem;
      white-space: nowrap;

      animation: marquee 5s linear infinite;
    }
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
`;
