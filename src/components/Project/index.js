import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Project = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src={project.image} className="card-image" />
          <Card.Body className="card-body">
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary" href={project.github}>
              Check it out on GitHub
            </Button>
            <Button
              variant="primary"
              href={project.deployed}
              className="button"
            >
              Check out the deployed app
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Project;
