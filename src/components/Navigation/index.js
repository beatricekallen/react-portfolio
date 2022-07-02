import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
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
  );
};

export default Navigation;
