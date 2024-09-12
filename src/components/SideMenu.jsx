import React from "react";
import styled from "styled-components";
import { Color } from "../assets/Colors";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideMenu = ({ open, setOpen }) => {
  const menu_list = [
    { items: "Home", to: "/" },
    { items: "Work", to: "work" },
    { items: "About", to: "about" },
    { items: "Contact", to: "contact" },
  ];

  return (
    <SideBar translate={!open ? "-100%" : "0%"}>
      <div className="side_wrapper">
        <div className="close_wrapper">
          <IoIosArrowBack id="close_icon" onClick={() => setOpen(false)} />
        </div>
        <div className="menu_items">
          <ul>
            {menu_list.map((item, i) => (
              <li key={i}>
                <NavLink to={item.to} onClick={() => setOpen(false)}>
                  {item.items}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SideBar>
  );
};

export default SideMenu;

const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #b6b6b678;
  position: fixed;
  top: 0;
  left: 0;
  /* filter: blur(2px); */
  transform: translate(${(props) => props.translate});
  transition: ease-in-out 0.3s;

  .side_wrapper {
    width: 90%;
    max-width: 42rem;
    background-color: ${Color.seconderyColor};;
    height: 100vh;
    position: relative;
    transition: ease-in-out 1s;

    .close_wrapper {
      position: absolute;
      right: -1.4rem;
      top: 2rem;

      svg {
        font-size: 3rem;
        color: ${Color.primaryColor};
        background-color: ${Color.seconderyColor};
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Color.helpingColor};
        }
      }
    }

    .menu_items {
      width: 100%;
      height: 100%;
      padding: 8rem 4rem;
      /* background-color: red; */

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        row-gap: 4rem;

        li {
          a {
            font-size: 2.1rem;
            color: ${Color.primaryColor};
            font-weight: 700;
            letter-spacing: 0.1rem;
            transition: ease-in-out 0.3s;

            &:hover {
              color: ${Color.helpingColor};
            }
          }
        }
      }
    }
  }
`;
