import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <AbourSkills>
      <div className="skills_wrapper">
        <h2>Software</h2>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Premiere Pro</li>
          <li>After Effects</li>
          <li>3DS Max</li>
          <li>V-Ray</li>
        </ul>
      </div>
      <div className="keys_wrapper">
        <h2>Key Skills</h2>
        <ul>
          <li>Brand Design</li>
          <li>Product & Packaging Design</li>
          <li>3D Visualisation</li>
          <li>Audio & Video Editing</li>
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
