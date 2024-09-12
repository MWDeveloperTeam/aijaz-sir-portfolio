import React from 'react';
import styled from 'styled-components';
import { Color } from '../../assets/Colors';

const About = () => {
  return (
    <AboutMe>
      <h1>This is About Page</h1>
    </AboutMe>
  );
};

export default About;

const AboutMe = styled.section`
  padding: 6rem 0 2rem 0;
  color: #fff;
`;
