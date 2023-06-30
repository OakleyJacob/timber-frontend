import React, { useState } from 'react';
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
    src={logo}
    style={{
      height: 40,
      width: 40,
      mixBlendMode: 'multiply',
      filter: 'brightness(125%)',
      float: 'left'
    }}
  />
    <Nav tabs>
      <NavItem>
        <NavLink href="/" ><div className='homeTest'>Home</div></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendindex" >All Friends</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendnew">Add Friends</NavLink>
      </NavItem>
   
    </Nav>
    </>
  );
}

export default Header