import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand to="/home">BdWatterFalls</Navbar.Brand>
    <Nav className="nav me-auto">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/about">About</NavLink>
      
      
     
     {user?.email ?  
     <Button onClick={logOut} variant="light">LOgOut</Button>:
     <NavLink to="/login">LOgin</NavLink>
     }
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
        </div>
    );
};

export default Header;