import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = ({ projects }) => {
  // style={{ width: "18rem" }}

  return (
    <Container fluid>
      <Row xs={1} s={1} md="auto" className="g-4">
        {projects.map((project) => (
          <Col>
            <Card className="card">
              <Card.Img
                variant="top"
                src={project.image}
                className="card-image"
              />
              <Card.Body className="card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.github} className="button">
                  Check it out on GitHub
                </Button>
                <Button href={project.deployed} className="button">
                  Check out the deployed app
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;
