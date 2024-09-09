import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Section>
      <Header />
      <Outlet />
    </Section>
  );
};

export default Layout;

const Section = styled.section`
  width: 100%;
  max-width: 192rem;
  background: red;
  margin: auto;
`;
