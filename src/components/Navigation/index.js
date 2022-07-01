import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <Navbar bg="light" variant="light" sticky="top" className="navbar">
      <Navbar.Brand href="#home" className="name">
        BEATRICE ALLEN
      </Navbar.Brand>
      <Nav className="nav-items">
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
