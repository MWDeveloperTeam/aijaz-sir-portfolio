import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import arrowImg from "../assets/arrow_anim_01.gif";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { mailData } from "../assets/mailData";

gsap.registerPlugin(useGSAP);

const LetsCoffee = () => {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".change_text");
    const tl = gsap.timeline();

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 30,
          rotateX: -90,
          stagger: 0.02,
          delay: 0,
        },
        "<"
      );

      tl.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -30,
          rotateX: 90,
          stagger: 0.02,
          delay: 1,
        },
        "<1"
      );

      tl.repeat(-1);
    });
  }, []);
  return (
    <Coffee>
      <div className="coffee_left_wrapper">
        <div className="animated_text_wrapper">
          <div>Let's</div>
          <div className="changable_text">
            <p className="change_text">Coffee</p>
            <p className="change_text">Talk</p>
            <p className="change_text">Design</p>
          </div>
        </div>
        <h1>together!​</h1>
      </div>
      <div className="coffee_right_wrapper">
        <img src={arrowImg} alt="arrow" />
        <div className="coffee_right_wrapper">
          <h3>
            <Link
              to={`mailto:${mailData.Email}?subject=${mailData.subject}&body=${mailData.body}`}
            >
              Get in touch
            </Link>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </Coffee>
  );
};

export default LetsCoffee;

const Coffee = styled.div`
  padding: 15rem 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  /* background-color: wheat; */
  border-top: 0.2rem solid #cccccc58;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding: 10rem 0;
  }

  .coffee_left_wrapper {
    min-width: 60rem;
    /* background-color: maroon; */

    @media only screen and (max-width: 1020px) {
      min-width: 45rem;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }

    @media only screen and (max-width: 520px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
      min-width: 200px;
      width: 100%;
    }
    .animated_text_wrapper {
      font-size: 8rem;
      font-weight: 900;
      display: flex;
      gap: 1.2rem;
      align-items: center;

      @media only screen and (max-width: 1020px) {
        font-size: 6rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 4rem;
      }

      .changable_text {
        p {
          line-height: 0;
        }
      }
    }
    h1 {
      font-size: 8rem;

      @media only screen and (max-width: 1020px) {
        font-size: 6rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 4rem;
      }
    }
  }

  .coffee_right_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    justify-content: flex-end;
    /* background-color: red; */

    @media only screen and (max-width: 768px) {
      flex: 1;
      align-items: center;
    }

    img {
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    h3 {
      a {
        color: ${Color.seconderyColor};
        font-size: 5rem;
        font-weight: 300;
        transition: ease-in-out 0.3s;

        &:hover {
          color: ${Color.helpingColor};
        }
        animation: blink-1 8s linear 1s infinite;
        @media only screen and (max-width: 1020px) {
          font-size: 4rem;
        }

        @media only screen and (max-width: 520px) {
          font-size: 3rem;
        }

        @keyframes blink-1 {
          0% {
            opacity: 1;
          }
          10% {
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          60% {
            opacity: 0;
          }
          70% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
    p {
      font-size: 1.6rem;
      color: ${Color.seconderyColorLight};
      opacity: 0.4;
      text-align: right;
      max-width: 50rem;

      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;
