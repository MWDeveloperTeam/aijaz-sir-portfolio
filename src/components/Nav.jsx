import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Color } from '../assets/Colors';

const Nav = () => {
  const menu_list = [
    { items: "Home", to: "/" },
    { items: "Work", to: "work" },
    { items: "About", to: "about" },
    { items: "Contact", to: "contact" },
  ];
  return (
    <Navigation>
      <ul>
        {menu_list.map((item, i) => (
          <li key={i}>
            <NavLink to={item.to} onClick={() => setOpen(false)}>
              {item.items}
            </NavLink>
          </li>
        ))}
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
