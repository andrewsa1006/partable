import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Quote = () => {
  const quoteState = useSelector((state) => state.app.quote);

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmitForm = async () => {
    try {
      let response = await axios.post("https://ukg0r9gl8h.execute-api.us-east-1.amazonaws.com/dev", {
        user: { company, name, phone, email, additional_info: additionalInfo },
        parts: { quoteState },
      });
      setMessage("Form submitted.");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      console.log(response);
    } catch (error) {
      setError(true);
      setMessage("Woops, an error has occured. Please try again later.");
      setTimeout(() => {
        setMessage(null);
        setError(false);
      }, 2000);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "30px" }}>
      <div style={{ width: "50%", textAlign: "start", border: "2px solid black", borderRadius: "15px", padding: "35px" }} className="contact-info">
        <h3>Contact Information:</h3>
        <InputGroup
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          className="mb-2 mt-2"
        >
          <Form.Control placeholder="Name of Company*" aria-label="company name" />
        </InputGroup>

        <InputGroup
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="mb-2 mt-2"
        >
          <Form.Control placeholder="Point Of Contact*" aria-label="point of contact" />
        </InputGroup>

        <InputGroup
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="mb-2 mt-2"
        >
          <Form.Control placeholder="Phone Number (optional)" aria-label="phone" />
        </InputGroup>

        <InputGroup
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="mb-2 mt-2"
        >
          <Form.Control placeholder="Email Address*" aria-label="email" />
        </InputGroup>

        <Form.Group
          onChange={(e) => {
            setAdditionalInfo(e.target.value);
          }}
          className="mb-3"
          controlId="Additional Info"
        >
          <Form.Label>Additional Info</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </div>
      <div style={{ width: "50%", textAlign: "start", border: "2px solid black", borderRadius: "15px", padding: "35px" }} className="quote-info">
        <h3>Confirm Quote Information:</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Part Name</th>
              <th>Part Number</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {quoteState.length < 1 ? (
              <tr>
                <td style={{ textAlign: "center" }} colSpan={4}>
                  Add parts to see them here.
                </td>
              </tr>
            ) : (
              quoteState.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.part_name}</td>
                    <td>{item.partable_part_number}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <Button onClick={handleSubmitForm} disabled={quoteState.length > 0 ? false : true}>
          Confirm and Request Quote
        </Button>
      </div>
      {message ? (
        <Toast
          style={{ position: "absolute", top: "100px", left: "42%", zIndex: "40" }}
          className="d-inline-block m-1"
          bg={error ? "error" : "success"}
        >
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Partable</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{message}</Toast.Body>
        </Toast>
      ) : null}
    </div>
  );
};

export default Quote;
