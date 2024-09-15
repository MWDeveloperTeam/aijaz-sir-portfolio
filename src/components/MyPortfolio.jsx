import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import WorkCard from "./WorkCard";
import Image3D from "../assets/imgs/3D Visualisation/14.webp";
import ImageGraphic from "../assets/imgs/Graphic_Design_imgs/13.webp";
import ImageProduct from "../assets/imgs/Product_Packaging/15.webp";
const MyPortfolio = () => {
  console.log(Image3D);

  const cardData = [
    {
      img: Image3D,
      title: "3D Visualisation",
      description: "Naming, Branding, Web Design",
      slug: "Photo3D",
    },
    {
      img: ImageGraphic,
      title: "Graphics Design",
      description: "Naming, Branding, Packing",
      slug: "GraphicPhoto",
    },
    {
      img: ImageProduct,
      title: "Product & Packaging",
      description: "Branding, Web Design, App",
      slug: "ProductPackaging",
    },
  ];

  return (
    <Section>
      <h1 className="title_wrapper">
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
