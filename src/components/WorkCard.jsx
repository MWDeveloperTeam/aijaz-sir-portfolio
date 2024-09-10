import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";

const WorkCard = ({ data }) => {
  const { title, img, description } = data;

  return (
    <Card>
      <div className="animation_text_wrapper">
        <span>
          {title}
          {description}
        </span>
      </div>
      <div className="card_content_wrapper">
        <div className="img_wrapper">
          <img src={img} alt="Image" />
        </div>
        <div className="content_wrapper">
          <h1>
            <span>{title} </span>
            <span>{description}</span>
          </h1>
        </div>
      </div>
    </Card>
  );
};

export default WorkCard;

const Card = styled.div`
  height: 60rem;
  width: 100%;
  /* background-color: red; */
  position: relative;
  margin-bottom: 10rem;
  &:nth-child(3) {
    .card_content_wrapper {
      flex-direction: row-reverse;
      /* background-color: red; */
      height: auto;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    /* height: auto; */
  }

  .animation_text_wrapper {
    width: 100%;
    /* background-color: red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      /* background-color: maroon; */
      white-space: nowrap;
      font-size: 15rem;
      color: #000000;
      font-weight: 900;
      text-shadow: 1px 0 #ffffff1a, -1px 0 #ffffff1a, 0 1px #ffffff1a,
        0 -1px #ffffff1a, 1px 1px #ffffff1a, -1px -1px #ffffff1a,
        1px -1px #ffffff1a, -1px 1px #ffffff1a;
      animation: animi 15s linear infinite;
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
    /* width: 100%; */
    display: flex;
    height: 100%;
    position: absolute;
    /* background-color: aqua; */
    top: 0;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    .img_wrapper {
      width: 60%;
      /* height: auto; */
      /* background-color: red; */
      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: auto;
        /* object-fit: cover; */
        border: 1rem solid ${Color.seconderyColor};
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
      /* background-color: #58b309; */
      display: flex;
      align-items: flex-end;
      padding: 2rem;
      flex: 1;
      h1 {
        display: flex;
        flex-direction: column;
        /* justify-content: flex-end; */
        /* background-color: blue; */
        flex: 1;

        span:nth-child(1) {
          font-size: 4rem;
          color: ${Color.seconderyColor};
          @media only screen and (max-width: 950px) {
            font-size: 3rem;
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
