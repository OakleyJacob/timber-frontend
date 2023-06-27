import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import logo from "../assets/pawLogo.png"

const Footer = () => {
  return (
    <>
    <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    {/* <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
    </NavbarBrand>
  </Navbar>
  <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar>
  <Navbar
    className="my-2"
    color="dark"
    dark
  > */}
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={logo}
        style={{
          height: 60,
          width: 60,
          mixBlendMode: 'multiply',
          filter: 'brightness(125%)',
        }}
      />
      JC Mingle
    </NavbarBrand>
  </Navbar>
  </>
  )
}

export default Footer


  
