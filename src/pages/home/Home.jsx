
import React from 'react';
import styled from 'styled-components';
import { MyPortfolio } from '../../components/index.js';
import Banner from '../../components/Banner';
const Home = () => {
  return (
    <Section>
      <Banner />
      <MyPortfolio />
    </Section>
  )
}

export default Home

const Section = styled.section`
  

`
