import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Quote = () => {
  const quoteState = useSelector((state) => state.app.quote);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "30px" }}>
      <div style={{ width: "50%", textAlign: "start", border: "2px solid black", borderRadius: "15px", padding: "35px" }} className="contact-info">
        <h3>Contact Information:</h3>
        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Name of Company*" aria-label="company name" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Point Of Contact*" aria-label="point of contact" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Phone Number (optional)" aria-label="phone" />
        </InputGroup>

        <InputGroup className="mb-2 mt-2">
          <Form.Control onChan placeholder="Email Address*" aria-label="email" />
        </InputGroup>

        <Form.Check type="radio" id="phone-preferred" label="Prefer Phone Contact"></Form.Check>
        <Form.Check type="radio" id="email-preferred" label="Prefer Email Contact"></Form.Check>

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
        <Button disabled={quoteState.length > 0 ? false : true}>Confirm and Request Quote</Button>
      </div>
    </div>
  );
};

export default Quote;
