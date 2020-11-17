import React from 'react';
// import './NavBar.scss';
import { Navbar, Nav, Form, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><a className="navbar-brand" href="/"><img src="https://img.techpowerup.org/201116/logo.png" alt="" width="150px" className="brand-logo img-fluid"/></a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navlink" variant="pills dark"  defaultActiveKey="home">
          <Nav.Link href="/home" eventKey='home'>Home</Nav.Link>
          <Nav.Link href="#about" eventKey='about'>About</Nav.Link>
          <Nav.Link href="#service" eventKey='service'>Service</Nav.Link>
          <Nav.Link href="#home" eventKey='concern'>Concern</Nav.Link>
          <Nav.Link href="#home" eventKey='event'>Event</Nav.Link>
          <Nav.Link href="#contact" eventKey='contact'>Contact</Nav.Link>
        </Nav>
          
          <Link to="login">
             <Button className="btnstyle" style={{marginLeft:"20px"}}>Login</Button>
            </Link>
            <Link to="dashboard">
             <Button className="btnstyle" style={{marginLeft:"20px"}}>DashBoard</Button>
            </Link>
          
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;