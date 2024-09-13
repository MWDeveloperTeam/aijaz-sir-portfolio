import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import WorkCard from "./WorkCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const MyPortfolio = () => {
  const cardData = [
    {
      img: "https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_01.jpg",
      title: "3D Visualisation",
      description: "Naming, Branding, Web Design",
    },
    {
      img: "https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_02_01.jpg",
      title: "Graphics Design",
      description: "Naming, Branding, Packing",
    },
    {
      img: "https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_03_01.jpg",
      title: "Product & Packaging",
      description: "Branding, Web Design, App",
    },
  ];

  return (
    <Section>
      <h1 className='title_wrapper'>
        <span>Check my</span>
        <span>Portfolio</span>
      </h1>
      {cardData.map((data, index) => (
        <WorkCard key={index} data={data} />
      ))}
    </Section>
  );
};

export default MyPortfolio;

const Section = styled.section`
  width: 100%;
  height: auto;

  .title_wrapper {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;

    @media only screen and (max-width: 768px) {
      flex-direction: row;
      gap: 1rem;
      align-items: center;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0rem;
    }

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

    @media only screen and (max-width: 768px) {
      span:first-child {
        font-size: 4rem;
      }
      span:last-child {
        font-size: 5rem;
      }
    }
  }
`;
