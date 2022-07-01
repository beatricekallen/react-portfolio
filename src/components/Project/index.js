import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = ({ projects }) => {
  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col>
            <Card style={{ width: "25rem" }} className="card">
              <Card.Img
                variant="top"
                src={project.image}
                className="card-image"
              />
              <Card.Body className="card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.github}>Check it out on GitHub</Button>
                <Button
                  variant="primary"
                  href={project.deployed}
                  className="button"
                >
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
