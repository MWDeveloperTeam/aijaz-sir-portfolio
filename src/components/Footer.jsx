import React from 'react';
import styled from 'styled-components';
import { Color } from '../assets/Colors';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterSection>
      <div className='social_media_icons_wrappe'>
        <Link to='https://www.facebook.com' target='_blank'>
          <FaFacebook />
        </Link>
        <Link to='https://www.x.com' target='_blank'>
          <FaTwitter />
        </Link>
        <Link to='https://www.linkedin.com/' target='_blank'>
          <FaLinkedinIn />
        </Link>
      </div>
      <div className='copy_right_wrapper'>
        &#169; Aijaz Ahmad - {new Date().getFullYear()}
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  width: 100%;
  padding: 5rem 0 12rem 0;
  color: #fff;
  border-top: 0.2rem solid #cccccc58;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
  }

  .social_media_icons_wrappe {
    display: flex;
    gap: 3rem;

    @media only screen and (max-width: 768px) {
      gap: 1.5rem;
    }

    a {
      svg {
        font-size: 2rem;
        transition: ease-in-out 0.3s;
        color: ${Color.seconderyColor};
        &:hover {
          color: ${Color.helpingColor};
          cursor: pointer;
          transform: translateY(-0.5rem);
        }
      }
    }
  }

  .copy_right_wrapper {
    font-size: 1.3rem;
    color: ${Color.seconderyColorLight};
    opacity: 0.4;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
