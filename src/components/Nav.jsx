import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Color } from "../assets/Colors";

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="work">Work</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;

const Navigation = styled.nav`
  font-size: 2rem;
  ul {
    list-style: none;
    display: flex;
    gap: 4rem;

    li {
      a {
        color: ${Color.seconderyColor};
        font-weight: 500;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Color.helpingColor};
        }
      }
    }
  }
`;
