import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {

  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="/" ><div className='homeTest'>Home</div></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendindex" >All Friends</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendshow">Search Friends</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendedit">Edit Friends</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/friendnew">Add Friends</NavLink>
      </NavItem>
   
    </Nav>
  );
}

export default Header