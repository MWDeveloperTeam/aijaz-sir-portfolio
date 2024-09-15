import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import { IoClose } from "react-icons/io5";
import GraphicDesign from "./Graphic Design/GraphicDesign";

const WorkModel = ({ modelOpen, data, title }) => {
  return (
    <Model>
      <div className="model_wrapper">
        <div className="model_header_wrapper">
          <h3>{title}</h3>
          <IoClose onClick={modelOpen} />
        </div>
        <div className="model_body">
          <GraphicDesign Photoss={data} />
        </div>
      </div>
    </Model>
  );
};

export default WorkModel;

const Model = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.366);
  backdrop-filter: blur(6px);
  padding: 2rem;
  cursor: auto;

  .model_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* overflow: auto; */
    width: 100%;
    max-width: 120rem;
    height: 100%;
    background-color: #ffffff;
    margin: auto;
    border-radius: 0.4rem;
    padding: 1rem;

    .model_header_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 4rem;

        @media only screen and (max-device-width: 768px) {
          font-size: 3rem;
        }
        @media only screen and (max-device-width: 520px) {
          font-size: 2.5rem;
        }
        @media only screen and (max-device-width: 320px) {
          font-size: 1.8rem;
        }
      }

      svg {
        font-size: 4rem;
        cursor: pointer;
        transition: ease-in-out 0.3s;

        @media only screen and (max-device-width: 320px) {
          font-size: 2.2rem;
        }
        &:hover {
          color: ${Color.helpingColor};
        }
      }
    }

    .model_body {
      overflow: auto;
      background-color: ${Color.primaryColor};
      padding: 2rem 1rem;
    }
  }
`;
