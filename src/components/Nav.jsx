import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Work</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;

const Navigation = styled.nav`
  

`
