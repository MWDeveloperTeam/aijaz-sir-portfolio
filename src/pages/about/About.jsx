import React from "react";
import styled from "styled-components";
import AboutMeHeader from "../../components/AboutMeHeader";
import AboutMeBanner from "../../components/AboutMeBanner";
import Skills from "../../components/Skills";
import Clients from "../../components/Clients";

const About = () => {
  return (
    <AboutMe>
      <AboutMeHeader />
      <AboutMeBanner />
      <Skills />
      <Clients />
    </AboutMe>
  );
};

export default About;

const AboutMe = styled.section`
  padding: 6rem 0 2rem 0;
  color: #fff;
`;
