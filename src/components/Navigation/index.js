import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">BEATRICE ALLEN</Navbar.Brand>
      <Nav className="me-auto">
        {tabs.map((tab) => (
          <Nav.Link
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
  );
};

export default Navigation;
