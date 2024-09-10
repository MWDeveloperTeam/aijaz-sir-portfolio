import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { Color } from '../assets/Colors';

const Header = () => {
  return (
    <Section>
      <div className='logo_wrapper'>Aijaz Sir</div>
      <Nav />
    </Section>
  );
};

export default Header;

const Section = styled.header`
  width: 100%;
  max-width: 120rem;
  position: sticky;
  margin: auto;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.primaryColor};
  z-index: 9;
  /* background-color: red; */
  padding: 1.6rem 0;

  .logo_wrapper {
    font-size: 3rem;
    color: ${Color.seconderyColor};
    font-weight: 900;
  }
`;
