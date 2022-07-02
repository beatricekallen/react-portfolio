import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = (props) => {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <Container fluid>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        expand="lg"
        className="navbar"
      >
        <Navbar.Brand href="#home" className="name">
          BEATRICE ALLEN
        </Navbar.Brand>
        <Nav className="nav-items">
          {tabs.map((tab) => (
            <Nav.Link
              activeClassName="underlined"
              className="nav-item"
              key={tab}
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
            >
              {tab}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Navigation;
