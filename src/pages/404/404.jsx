import React from "react";
import styled from "styled-components";
import NotFoundImg from "../../assets/imgs/404.webp";

const PageNotFound = () => {
  return (
    <Section>
      <img src={NotFoundImg} alt="Page Not Found" />
    </Section>
  );
};

export default PageNotFound;
const Section = styled.div`
  width: 100%;
  height: auto;
  background-color: #000000;

  img {
    width: 100%;
    height: auto;
  }
`;
