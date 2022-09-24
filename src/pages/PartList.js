import Part from "../components/Part";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToQuote } from "../store/appSlice";

const PartList = () => {
  const possibleParts = useSelector((state) => state.app.parts);
  const dispatch = useDispatch();
  const [parts, setParts] = useState(possibleParts);
  const [partView, setPartView] = useState({});
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <InputGroup
        className="mb-3 mt-4"
        onChange={(e) => {
          let filteredParts = possibleParts.filter((part) => {
            let lowercaseSearch = e.target.value.toLowerCase();
            return (
              part.part_name.toLowerCase().includes(lowercaseSearch) ||
              part.partable_part_number.toString().toLowerCase().includes(lowercaseSearch) ||
              part.global_part_number.toString().toLowerCase().includes(lowercaseSearch)
            );
          });
          setParts(filteredParts);
        }}
      >
        <InputGroup.Text id="search-bar">
          <BsSearch />
        </InputGroup.Text>
        <Form.Control placeholder="Search Part Name or Part Number" aria-label="Search Parts" />
      </InputGroup>
      <Row>
        {parts.map((part) => {
          return (
            <Col className="mb-4" key={part.id}>
              <Part handleClose={handleClose} handleShow={handleShow} part={part} setPartView={setPartView} setShowToast={setShowToast} />
            </Col>
          );
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{partView.part_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={partView.image_url} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={partView.image_url} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={partView.image_url} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <Badge bg={partView.in_stock ? "success" : "warning"}>{partView.in_stock ? "In Stock" : "Out of Stock"}</Badge>
          <p>Partable's Part Number: {partView.partable_part_number}</p>
          <p>External Part Number: {partView.global_part_number}</p>
          <p>{partView.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const item = { part_name: partView.part_name, partable_part_number: partView.partable_part_number, quantity: 1 };
              dispatch(addItemToQuote(item));
              handleClose();
              setShowToast(true);
              setTimeout(() => {
                setShowToast(false);
              }, 1500);
            }}
          >
            Add to Quote
          </Button>
        </Modal.Footer>
      </Modal>

      {showToast ? (
        <Toast style={{ position: "absolute", top: "100px", left: "42%", zIndex: "40" }} className="d-inline-block m-1" bg="success">
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Partable</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Added to cart!</Toast.Body>
        </Toast>
      ) : null}
    </div>
  );
};

export default PartList;
