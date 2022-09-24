import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const Quote = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "30px" }}>
      <div style={{ width: "50%", textAlign: "start", border: "2px solid black", borderRadius: "15px", padding: "35px" }} className="contact-info">
        <h3>Contact Information:</h3>
        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Name of Company" aria-label="company name" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Point Of Contact" aria-label="point of contact" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Phone Numbers (optional)" aria-label="phone" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Email Address" aria-label="email" />
        </InputGroup>

        <Form>
          <Form.Check type="radio" id="phone-preferred" label="Phone"></Form.Check>
          <Form.Check type="radio" id="email-preferred" label="Email"></Form.Check>
        </Form>

        <Form.Group className="mb-3" controlId="Additional Info">
          <Form.Label>Additional Info</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </div>
      <div style={{ width: "50%", textAlign: "start", border: "2px solid black", borderRadius: "15px", padding: "35px" }} className="quote-info">
        <h3>Confirm Quote Information:</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Part Name</th>
              <th>Part Number</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vice Grip</td>
              <td>9687458</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Volt Meter</td>
              <td>254185</td>
              <td>6</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Air Ratchet</td>
              <td>474944</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
        <Button>Confirm and Request Quote</Button>
      </div>
    </div>
  );
};

export default Quote;
