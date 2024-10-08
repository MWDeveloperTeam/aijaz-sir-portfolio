import React from "react";
import { Color } from "../assets/Colors";
import styled from "styled-components";
import logo1 from "../assets/imgs/companylogo/1.png";
import logo2 from "../assets/imgs/companylogo/2.png";
import logo3 from "../assets/imgs/companylogo/3.png";
import logo4 from "../assets/imgs/companylogo/4.png";
import logo5 from "../assets/imgs/companylogo/5.png";

const Clients = () => {
  const imgs = [
    {
      img: logo1,
    },
    {
      img: logo2,
    },
    {
      img: logo3,
    },
    {
      img: logo4,
    },
    {
      img: logo5,
    },
  ];
  return (
    <Section>
      <h1>Clients</h1>
      <div className="client_content_wrapper">
        <div className="client_left_wrapper">
          <h3>
            I worked with some pretty outstanding people and some pretty awesome
            companies.
          </h3>
          <p>
            Over the years, I've had the privilege of collaborating with various
            companies and clients, delivering tailored design solutions that
            meet their unique needs. My experience has honed my ability to adapt
            and innovate, ensuring that each project not only meets but exceeds
            expectations. Whether working with large organizations or individual
            clients, I am committed to bringing creativity and precision to
            every endeavor.
          </p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
        <div className="client_right_wrapper">
          {imgs.map((img, i) => (
            <div className="client_img_wrapper" key={i}>
              <img src={img.img} alt="logo" />
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
      gap: 1rem;
      /* justify-content: center; */
      align-content: center;

      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 3rem;
      }

      .client_img_wrapper {
        img {
          width: 18rem;
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
