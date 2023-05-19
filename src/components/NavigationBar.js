import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="search">Search</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
}

export default NavigationBar;