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
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
    <Container fluid>
    <Navbar.Brand to="/home">BdWaterFalls</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav me-auto">
      <NavLink className="nav-item" to="/home">Home</NavLink>
      <NavLink className="nav-item" to="/services">Services</NavLink>
      <NavLink className="nav-item" to="/blogs">Blogs</NavLink>
      <NavLink className="nav-item" to="/contact">Contact</NavLink>
      
      

      
     {user?.email ?  
        
     <Button className=""  onClick={logOut} variant="light">LogOut</Button> 
     :
     <NavLink to="/login">LOgin</NavLink>

     }

    
    </Nav>
    </Navbar.Collapse>
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