import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import WorkCard from "./WorkCard";

const MyPortfolio = () => {
  return (
    <Section>
      <h1 className="title_wrapper">
        <span>Check my</span>
        <span>Portfolio</span>
      </h1>
      <WorkCard />
    </Section>
  );
};

export default MyPortfolio;

const Section = styled.section`
  margin-top: 8rem;

  .title_wrapper {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;

    span:first-child {
      color: ${Color.seconderyColor};
      font-weight: 400;
      font-size: 5rem;
    }
    span:last-child {
      color: ${Color.seconderyColor};
      font-weight: 700;
      font-size: 6rem;
    }
  }
`;
