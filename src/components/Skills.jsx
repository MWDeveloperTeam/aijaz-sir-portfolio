import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";

const Skills = () => {
  return (
    <AbourSkills>
      <div className="skills_wrapper">
        <h2>Software</h2>
        <ul>
          <li>Figma</li>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>InDesign</li>
          <li>Illustrator</li>
          <li>After Effects</li>
        </ul>
      </div>
      <div className="keys_wrapper">
        <h2>Key Skills</h2>
        <ul>
          <li>Identity system design</li>
          <li>User-experience design</li>
          <li>User-interface design</li>
          <li>Data analysis</li>
          <li>Critical thinking</li>
        </ul>
      </div>
    </AbourSkills>
  );
};

export default Skills;

const AbourSkills = styled.div`
  padding: 5rem 0;
  display: flex;
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  .skills_wrapper {
    flex: 1;

    h2 {
      font-size: 8rem;
      border-bottom: 0.1rem solid #fff;
      padding-bottom: 1rem;

      @media only screen and (max-width: 950px) {
        font-size: 6rem;
      }

      @media only screen and (max-width: 420px) {
        font-size: 4rem;
      }
    }

    ul {
      list-style: none;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        font-size: 1.8rem;
        color: #b7b7b7c0;
        transition: ease-in-out 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .keys_wrapper {
    flex: 1;

    h2 {
      font-size: 8rem;
      border-bottom: 0.1rem solid #fff;
      padding-bottom: 1rem;

      @media only screen and (max-width: 950px) {
        font-size: 6rem;
      }

      @media only screen and (max-width: 420px) {
        font-size: 4rem;
      }
    }
    ul {
      list-style: none;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        font-size: 1.8rem;
        color: #b7b7b7c0;
        transition: ease-in-out 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
