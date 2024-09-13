import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Color } from '../assets/Colors';
import Footer from './Footer';

const Layout = () => {
  return (
    <Section>
      <div className='main'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Section>
  );
};

export default Layout;

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  background-color: ${Color.primaryColor};
  height: 100vh;
  .main {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    /* background-color: olive; */
    position: relative;
    /* height: 100%; */
  }
`;
