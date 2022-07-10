import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bioPhoto from "../../assets/images/about-me-photo.png";

const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col s={12} m={6} l={6}>
          <h2>Hi there!</h2>
          <p>
            In my previous life, before I discovered coding, I worked in
            scholarly publishing. As a book nerd, I thought at one point that I
            would stay in publishing for my entire career. But then I was tasked
            with creating a website for a new publication at work, and I was
            immediately hooked. I knew coding was what I was meant to do.
          </p>
          <p>
            Since that day, I've learned full stack web development: from
            JavaScript, HTML, and CSS to Node.js, Express.js, SQL, NoSQL,
            MongoDB, and React. I love learning new languages and applications
            and the constant challenge that coding presents.
          </p>
          <p>
            Please check out my portfolio page to see some examples of my work,
            and please feel free to get in touch via the contact page!
          </p>
        </Col>

        <Col s={6}>
          <img src={bioPhoto} alt="Beatrice Allen" className="about-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
