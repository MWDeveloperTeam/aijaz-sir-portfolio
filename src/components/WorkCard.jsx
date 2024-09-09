import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";

const WorkCard = () => {
  return (
    <Card>
      <div className="animation_text_wrapper">Hello World</div>
      <div className="card_content_wrapper">
        <div className="img_wrapper">
          <img
            src="https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_01.jpg"
            alt="Image"
          />
        </div>
        <div className="content_wrapper">
          <h1>
            <span>Good Design</span>
            <span>Naming, Branding, Web Design</span>
          </h1>
        </div>
      </div>
    </Card>
  );
};

export default WorkCard;

const Card = styled.div`
  height: 70rem;
  background-color: red;
  position: relative;

  .card_content_wrapper {
    width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;

    .img_wrapper {
      width: 80%;
      height: 100%;
      background-color: blue;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1rem solid ${Color.seconderyColor};
        border-radius: 0.4rem;
      }
    }

    .content_wrapper {
      width: 20%;
      background-color: #52ae06;
      display: flex;
      flex-direction: column;
    }
  }
`;
