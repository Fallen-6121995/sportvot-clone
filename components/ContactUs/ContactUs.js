import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contactUsStyles from "../../styles/downloadApp.module.css";

function ContactUs() {
  return (
    <div>
      <Container>
        <div className={`text-center heading`}>
          <h3>Contact Us Today!</h3>
          <h5>To Know More About Us</h5>
        </div>
        <div>
          <Form className="form-text">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
              <option>How did you come to know about us?</option>
              <option value="1">Google</option>
              <option value="2">Instagram</option>
              <option value="3">Linkedin</option>
              <option value="3">whatsApp</option>
              <option value="3">Via a colleague/Friend</option>
              <option value="3">Others</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
