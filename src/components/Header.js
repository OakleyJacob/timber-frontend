import React, { useState } from 'react';
import styles from '../styles/Header.css'
import logo from "../assets/treelogo.png"
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {

  return (
    <>
    <img
    alt="logo"
    className='logo'
    src={logo}
    style={{
      height: 60,
      width: 60,
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'brightness(125%)',
      float: 'left'
    }}
  />
    <Nav tabs className='navbar'>
      <NavItem>
        <NavLink href="/" ><div className='homeTest'>Home</div></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendindex" ><div className='homeTest'>All Friends</div></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendnew"><div className='homeTest'>Add Friends</div></NavLink>
      </NavItem>
   
    </Nav>
    </>
  );
}

export default Header