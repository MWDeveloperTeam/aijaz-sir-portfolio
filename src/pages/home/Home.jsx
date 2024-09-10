import React from "react";
import styled from "styled-components";
import { MyPortfolio } from "../../components/index.js";
import Clients from "../../components/Clients.jsx";
import Footer from "../../components/Footer.jsx";
import LetsCoffee from "../../components/LetsCoffee.jsx";

const Home = () => {
  return (
    <Section>
      <MyPortfolio />
      <Clients />
      <LetsCoffee />
    </Section>
  );
};

export default Home;

const Section = styled.section``;
