import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validateEmail } from "../../assets/utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
    setFormState({ ...formState, [e.target.name]: "" });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="form-container">
      <h2>Get in touch!</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="A name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Leave a message!</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="A message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button type="submit" className="button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
