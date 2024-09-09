import React from "react";
import styled from "styled-components";
import { MyPortfolio } from "../../components/index.js";

const Home = () => {
  return (
    <Section>
      <MyPortfolio />
    </Section>
  );
};

export default Home;

const Section = styled.section``;
