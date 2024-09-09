import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <Section>
      <div className="logo_wrapper">Aijaz Sir</div>
      <Nav />
    </Section>
  );
};

export default Header;

const Section = styled.header``;
