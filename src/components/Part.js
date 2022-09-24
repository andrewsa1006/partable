import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import "./Part.css";
import { useDispatch } from "react-redux";
import { addItemToQuote } from "../store/appSlice";

const Part = (props) => {
  const dispatch = useDispatch();

  const { partable_part_number, part_name, in_stock, description, image_url } = props.part;
  return (
    <div>
      <Card className="part-card">
        <Card.Img style={{ height: "250px" }} variant="top" src={image_url} />
        <hr />
        <Card.Body>
          <Card.Title>
            {part_name} <Badge bg={in_stock ? "success" : "warning"}>{in_stock ? `In Stock` : "Out of Stock"}</Badge>
          </Card.Title>

          <Card.Text>
            Part Number: {partable_part_number}
            <br />
            {description.substring(0, 35) + "..."}
          </Card.Text>
          <div className="buttons">
            <Button
              onClick={() => {
                props.setPartView(props.part);
                props.handleShow();
              }}
              variant="primary"
            >
              View Part
            </Button>
            <Button
              onClick={() => {
                const item = { part_name, partable_part_number, quantity: 1 };
                dispatch(addItemToQuote(item));
                props.setShowToast(true);
                setTimeout(() => {
                  props.setShowToast(false);
                }, 1500);
              }}
              variant="primary"
            >
              Add to Quote
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Part;
