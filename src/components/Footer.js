import React, { useState, useEffect }  from 'react';
import styles from '../styles/Footer.css'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <>
    <Navbar
      className="my-2"
      color="secondary"
      dark
      >
      <NavbarBrand href="/">

      
         JC Mingle &copy; Chris Frey and Jacob Oakley {currentYear}
      </NavbarBrand>
    </Navbar>
  </>
  )
}

export default Footer


  
