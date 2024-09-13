import React from 'react';
import { Color } from '../assets/Colors';
import styled from 'styled-components';


const Clients = () => {
  const imgs = [
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_01.png',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_02.png',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_03.png',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_04.png',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_05.png',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/lo_06.png',
    },
  ];
  return (
    <Section>
      <h1>Clients</h1>
      <div className='client_content_wrapper'>
        <div className='client_left_wrapper'>
          <h3>
            I worked with some pretty outstanding people at some pretty awesome
            companies.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='client_right_wrapper'>
          {imgs.map((img, i) => (
            <div className='client_img_wrapper' key={i}>
              <img src={img.img} alt='logo' />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Clients;

const Section = styled.section`
  color: #fff;
  width: 100%;
  height: auto;
  /* background-color: red; */

  > h1 {
    font-size: 6rem;
    font-weight: 700;
    border-bottom: 0.1rem solid ${Color.seconderyColor};
    color: ${Color.seconderyColor};
    padding-bottom: 2rem;

    @media only screen and (max-width: 445px) {
      font-size: 4rem;
    }
  }

  .client_content_wrapper {
    display: flex;
    padding: 5rem 0;
    gap: 6rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .client_left_wrapper {
      /* background: blue; */
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h3 {
        font-size: 3rem;
        @media only screen and (max-width: 900px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 2rem;
        color: ${Color.seconderyColorLight};
        @media only screen and (max-width: 900px) {
          font-size: 1.6rem;
        }
      }
    }

    .client_right_wrapper {
      flex: 1;
      /* background-color: green; */
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 4rem;
      /* justify-content: center; */
      align-content: center;

      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 0rem;
      }

      .client_img_wrapper {
        /* background-color: wheat; */
        img {
          width: 25rem;
          height: auto;
          transition: ease-in-out 0.3s;

          &:hover {
            transform: scale(1.02);
          }
          @media only screen and (max-width: 1020px) {
            width: 100%;
          }
        }
      }
    }
  }
`;
