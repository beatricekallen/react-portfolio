import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Nav className="me-auto">
        <Nav.Link href="#github">GitHub</Nav.Link>
        <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
        <Nav.Link href="#twitter">Twitter</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
