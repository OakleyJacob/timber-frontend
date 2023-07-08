import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../../assets/treelogo.png"
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";

const Header = (props) => {
  const [endpoint, setEndpoint] = useState('/')
  const location = useLocation()
  useEffect(() => {
    // console.log(location.pathname);
    setEndpoint(location.pathname)
  }, [location.pathname])
  const headerArray = [ '/', '/friendindex/', '/friendnew/']
  return (
    <>
    <div style={{position:'fixed',
    width:'100%',
    zIndex:'1'
  }}>
    <Layout  >
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
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
          <Text b color="inherit" hideIn="xs">
            Timber
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" >
          {headerArray.map((value, index) => {
            switch(value) {
              case '/':
                if(endpoint === value) {
                  return <Navbar.Link key={index} isActive href="/">Home</Navbar.Link>
                } else{
                  return <Navbar.Link key={index} href="/">Home</Navbar.Link>
                }
              case '/friendindex/':
                if(endpoint === value) {
                  return <Navbar.Link key={index} isActive href="/friendindex/">Friends</Navbar.Link>
                } else{
                  return <Navbar.Link key={index} href="/friendindex/">Friends</Navbar.Link>
                }

              case '/friendnew/':
                if(endpoint === value) {
                  return <Navbar.Link key={index} isActive href="/friendnew/">Add Friend</Navbar.Link>
                } else{
                  return <Navbar.Link key={index} href="/friendnew/">Add Friend</Navbar.Link>
                }
            }
          })}
          {/* <Navbar.Link href="#">Company</Navbar.Link> */}
        </Navbar.Content>
        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
      </Navbar>
    </Layout>
    </div>

    </>
  );
}

export default Header






    
