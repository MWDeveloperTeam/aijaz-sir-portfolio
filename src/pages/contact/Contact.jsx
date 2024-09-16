import React from "react";
import styled from "styled-components";
import { mailData } from "../../assets/mailData";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import ArrowImg from "../../assets/arrow_anim_01.gif";
import { Link } from "react-router-dom";
import LetsCoffee from "../../components/LetsCoffee";
import { Color } from "../../assets/Colors";

const Contact = () => {
  return (
    <ContactSection>
      <h1 className="heading">
        Contact<span>Me</span>
      </h1>
      <h3 className="smallHeading">Let's Start a Project together</h3>
      <p className="firstPara">
        RRAA2687 - Al Qarnayn - Riyadh - 13511 <br />
        +966540506741
      </p>
      <Link
        className="mail"
        to={`mailto:${mailData.Email}?subject=${mailData.subject}&body=${mailData.body}`}
      >
        {mailData.Email}
      </Link>
      <div className="iconsWrapper">
        <div className="socialIcons">
          <Link to={"https://linkedin.com/in/aijazrather"} target="_blank">
            <FaLinkedinIn />
          </Link>
        </div>
        <img src={ArrowImg} alt="animated arrow image" />
      </div>
      <div className="animation_wrapper_contact">
        <div className="animationDiv">
          <h1>web design video branding ui/ux app video branding.</h1>
        </div>
        <div className="animationDiv1">
          <h1>
            Figma Sketch Webflow Photoshop InDesign Illustrator After Effects
          </h1>
        </div>
      </div>
      <LetsCoffee />
    </ContactSection>
  );
};

export default Contact;
const ContactSection = styled.div`
  color: #fff;
  padding-top: 10rem;

  @media only screen and (max-width: 450px) {
    padding-top: 2rem;
  }
  .heading {
    font-size: 7rem;
    font-weight: 300;
    span {
      font-weight: 800;
    }
    @media only screen and (max-width: 450px) {
      font-size: 5rem;
    }

    @media only screen and (max-device-width: 440px) {
      font-size: 5rem;
    }

    @media only screen and (max-device-width: 320px) {
      font-size: 4rem;
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
  .firstPara {
    font-size: 2rem;
    margin-top: 5rem;
    @media only screen and (max-width: 450px) {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
  }
  /* .firstPara {
    margin-top: 5rem;
  } */
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
    @media only screen and (max-device-width: 440px) {
      flex-direction: column;
      gap: 2rem;
      padding: 3rem 0;
      align-items: flex-start;

      img {
        align-self: flex-end;
      }
    }

    .socialIcons {
      a {
        color: #fff;
        margin-right: 4rem;
        font-size: 3rem;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Color.helpingColor};
        }

        @media only screen and (max-device-width: 520px) {
          margin-right: 3rem;
          font-size: 2.2rem;
        }
      }
    }

    img {
      width: 5rem;
    }
  }

  .animation_wrapper_contact {
    height: auto !important;
    margin-bottom: 8rem;
    .animationDiv {
      /* overflow: hidden; */
      h1 {
        font-size: 18rem;
        white-space: nowrap;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #ffffff84;
        color: #000;
        /* transform: translateX(190rem); */
        animation: marquee 30s linear infinite;
        @media only screen and (max-width: 768px) {
          font-size: 14rem;
        }

        @media only screen and (max-width: 520px) {
          font-size: 10rem;
        }
      }

      /* ================= */
      @keyframes marquee {
        0% {
          transform: translateX(calc(1200px + 680px));
        }
        100% {
          transform: translateX(-580rem);
        }
      }
      /* 1920px Screen */
      @media only screen and (max-width: 1920px) {
        @keyframes marquee {
          0% {
            transform: translateX(calc(1200px + 360px));
          }
          100% {
            transform: translateX(-540rem);
          }
        }
      }
      /* 1440px Screen */
      @media only screen and (max-width: 1440px) {
        @keyframes marquee {
          0% {
            transform: translateX(calc(1200px + 120px));
          }
          100% {
            transform: translateX(-520rem);
          }
        }
      }

      /* 1024px Screen */
      @media only screen and (max-width: 1024px) {
        @keyframes marquee {
          0% {
            transform: translateX(1024px);
          }
          100% {
            transform: translateX(-500rem);
          }
        }
      }

      /* 768px Screen */
      @media only screen and (max-width: 768px) {
        @keyframes marquee {
          0% {
            transform: translateX(768px);
          }
          100% {
            transform: translateX(-390rem);
          }
        }
      }

      /* 425px screen */
      @media only screen and (max-device-width: 425px) {
        @keyframes marquee {
          0% {
            transform: translateX(425px);
          }
          100% {
            transform: translateX(-280rem);
          }
        }
      }

      /* 375px screen */
      @media only screen and (max-device-width: 375px) {
        @keyframes marquee {
          0% {
            transform: translateX(375px);
          }
          100% {
            transform: translateX(-275rem);
          }
        }
      }

      /* 320px screen */
      @media only screen and (max-device-width: 320px) {
        @keyframes marquee {
          0% {
            transform: translateX(320px);
          }
          100% {
            transform: translateX(-275rem);
          }
        }
      }
      /* ========== */
    }

    .animationDiv1 {
      h1 {
        font-size: 10rem;
        white-space: nowrap;
        animation: marquee1 50s linear infinite;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffffff84;
        color: #000;
        @media only screen and (max-device-width: 425px) {
          font-size: 6rem;
        }
      }

      /* Animation Code */

      @keyframes marquee1 {
        0% {
          transform: translateX(-4020px);
        }
        100% {
          transform: translateX(2000px);
        }
      }

      /* 1920 animation screen */
      @media only screen and (max-width: 1920px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-3700px);
          }
          100% {
            transform: translateX(calc(1920px - 360px));
          }
        }
      }

      /* 1440px screen */
      @media only screen and (max-width: 1440px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-3500px);
          }
          100% {
            transform: translateX(calc(1440px - 120px));
          }
        }
      }

      /* 1024px screen */
      @media only screen and (max-width: 1024px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-3400px);
          }
          100% {
            transform: translateX(calc(1024px));
          }
        }
      }

      /* 768px screen */
      @media only screen and (max-width: 768px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-3400px);
          }
          100% {
            transform: translateX(calc(768px));
          }
        }
      }

      /* 425px screen */
      @media only screen and (max-device-width: 425px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-2050px);
          }
          100% {
            transform: translateX(calc(425px));
          }
        }
      }

      /* 375px screen */
      @media only screen and (max-device-width: 375px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-2050px);
          }
          100% {
            transform: translateX(calc(375px));
          }
        }
      }

      /* 320px screen */
      @media only screen and (max-device-width: 320px) {
        @keyframes marquee1 {
          0% {
            transform: translateX(-2050px);
          }
          100% {
            transform: translateX(calc(320px));
          }
        }
      }
    }
  }
`;
