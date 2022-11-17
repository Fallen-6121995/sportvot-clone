import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contactUsStyles from "../../styles/contactUs.module.css";

function ContactUs() {
  return (
    <div className={contactUsStyles.ContactUsFormSec}>
    <div className="py-5">
      <Container>
        <div className={`text-center heading`}>
          <h3>Contact Us Today!</h3>
          <h5>To Know More About Us</h5>
        </div>
        <div className={contactUsStyles.contactUsForm}>
          <div className="col-md-5 mx-auto">
          <Form className="form-text">
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Select className="mb-4" aria-label="Default select example">
              <option>How did you come to know about us?</option>
              <option value="1">Google</option>
              <option value="2">Instagram</option>
              <option value="3">Linkedin</option>
              <option value="3">whatsApp</option>
              <option value="3">Via a colleague/Friend</option>
              <option value="3">Others</option>
            </Form.Select>
           <div className="row">
            <Form.Group className="col-md-6 mb-4" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Phone No*" />
            </Form.Group>

            <Form.Group className="col-md-6 mb-4" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="City*" />
            </Form.Group>
            </div>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control placeholder="Message*" as="textarea" rows={3} />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}

export default ContactUs;
