import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header({ setPage }) {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Navbar.Brand as={NavLink} to="/" className="header-title">Home</Navbar.Brand>
        <Nav className="ml-auto header-links">
          <NavLink
            to="/about"
            className="header-link"
            activeClassName="active"
            onClick={() => { setPage("about"); }}
          >
            About Me
          </NavLink>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
