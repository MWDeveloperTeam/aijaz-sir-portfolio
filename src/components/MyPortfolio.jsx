import React from 'react';
import styled from 'styled-components';
import { Color } from '../assets/Colors';
import WorkCard from './WorkCard';

const MyPortfolio = () => {
  const cardData = [
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_01.jpg',
      title: 'Good Design',
      description: 'Naming, Branding, Web Design',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_02_01.jpg',
      title: 'PB Tube',
      description: 'Naming, Branding, Packing',
    },
    {
      img: 'https://puzzlerbox.com/templatekits-free/personal/wp-content/uploads/sites/16/2022/05/project_03_01.jpg',
      title: 'OnBank Banking',
      description: 'Branding, Web Design, App',
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
  /* margin-top: 8rem; */
  width: 100%;
  /* background-color: maroon; */
  /* padding: 2rem; */
  height: auto;
  overflow: hidden;
  /* padding: 2rem 0; */

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
