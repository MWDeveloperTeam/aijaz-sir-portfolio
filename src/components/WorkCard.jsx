import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import WorkModel from "./WorkModel";
import Photos from "../assets/Photos";

const WorkCard = ({ data }) => {
  const { title, img, description, slug } = data;
  const [modelOpen, setModelOpen] = useState(false);

  const modelHander = () => {
    setModelOpen((prev) => !prev);
  };

  return (
    <Card>
      <div className="animation_text_wrapper">
        <div>
          {title} {description}
        </div>
      </div>
      <div className="card_content_wrapper">
        <div className="img_wrapper" onClick={modelHander}>
          <img src={img} alt="Image" />
        </div>
        <div className="content_wrapper" onClick={modelHander}>
          <h1>
            <span>{title} </span>
            <span>{description}</span>
          </h1>
        </div>
      </div>
      {modelOpen ? (
        <WorkModel modelOpen={modelHander} data={Photos[slug]} title={title} />
      ) : null}
    </Card>
  );
};

export default WorkCard;

const Card = styled.div`
  cursor: pointer;
  height: auto;
  width: 100%;
  position: relative;
  margin-bottom: 10rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 520px) {
    margin-bottom: 2rem;
  }

  &:nth-child(odd) {
    .card_content_wrapper {
      flex-direction: row-reverse;
      height: auto;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
      .content_wrapper {
        text-align: right;

        @media only screen and (max-width: 768px) {
          text-align: left;
        }
      }
    }
  }

  .animation_text_wrapper {
    width: 100%;
    position: absolute;
    top: 25%;
    z-index: 0;
    @media only screen and (max-width: 520px) {
      top: 15%;
    }

    div {
      white-space: nowrap;
      font-size: 15rem;
      color: ${Color.primaryColor};
      font-weight: 900;
      text-shadow: 1px 0 #ffffff1a, -1px 0 #ffffff1a, 0 1px #ffffff1a,
        0 -1px #ffffff1a, 1px 1px #ffffff1a, -1px -1px #ffffff1a,
        1px -1px #ffffff1a, -1px 1px #ffffff1a;
      animation: animi 15s linear infinite;

      @media only screen and (max-width: 520px) {
        font-size: 10rem;
      }
    }

    @keyframes animi {
      0% {
        transform: translateX(120rem);
      }
      100% {
        transform: translateX(-140rem);
      }
    }
  }

  .card_content_wrapper {
    display: flex;
    position: relative;
    top: 0;
    padding: 1rem;
    z-index: 2;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    .img_wrapper {
      width: 60%;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: auto;
        border: 0.3rem solid ${Color.seconderyColor};
        border-radius: 0.4rem;
        object-position: 100%;
        transition: ease-in-out 0.3s;

        &:hover {
          animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
            alternate infinite;
        }

        @keyframes scale-up-center {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0.5rem);
          }
        }
      }
    }

    .content_wrapper {
      display: flex;
      align-items: flex-end;
      padding: 2rem;
      flex: 1;

      @media only screen and (max-width: 520px) {
        padding: 2rem 0;
      }
      h1 {
        display: flex;
        flex-direction: column;
        flex: 1;

        span:nth-child(1) {
          font-size: 4rem;
          color: ${Color.seconderyColor};
          @media only screen and (max-width: 950px) {
            font-size: 3rem;
          }

          @media only screen and (max-width: 520px) {
            font-size: 2rem;
          }
        }

        span:nth-child(2) {
          font-size: 2rem;
          color: ${Color.seconderyColorLight};
          font-weight: 300;
          @media only screen and (max-width: 950px) {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;
