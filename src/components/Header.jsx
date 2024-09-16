import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { Color } from "../assets/Colors";
import { SlMenu } from "react-icons/sl";
import SideMenu from "./SideMenu";
import logoImg from "../assets/imgs/sitename.gif";
import { Link } from "react-router-dom";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const menuHandler = () => setOpen(!open);

  useEffect(() => {
    const windowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowSize);
  }, []);

  return (
    <Section>
      <div className="logo_wrapper">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
      </div>

      {windowSize >= 768 ? (
        <Nav />
      ) : (
        <div>
          <SlMenu onClick={menuHandler} id="side_icon" />
        </div>
      )}
      <SideMenu open={open} setOpen={setOpen} />
    </Section>
  );
};

export default Header;

const Section = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${Color.primaryColor};
  z-index: 9;
  padding: 1.6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.primaryColor};
  max-width: 120rem;
  margin: auto;

  .logo_wrapper {
    img {
      width: 161px;
      height: 35px;
    }

    @media only screen and (max-width: 520px) {
      font-size: 2rem;
    }
  }

  #side_icon {
    color: #fff;
    font-size: 2.6rem;
    cursor: pointer;
    transition: ease-in-out 0.3s;
    &:hover {
      color: ${Color.helpingColor};
    }
  }
`;
