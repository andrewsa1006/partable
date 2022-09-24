import Part from "../components/Part";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const PartList = () => {
  const possibleParts = [
    {
      id: 1,
      partable_part_number: 413144,
      global_part_number: 175472645,
      part_name: "Chisels / Punches",
      image_url: "https://cdn.mscdirect.com/global/images/ProductImages/5242615-24.jpg",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 2,
      partable_part_number: 578964,
      global_part_number: 254245124,
      part_name: "Floor Jack",
      image_url: "https://m.media-amazon.com/images/I/71oEH8IPyiL._AC_SL1494_.jpg",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 3,
      partable_part_number: 9687458,
      global_part_number: 9686479545,
      part_name: "Vice Grips",
      image_url: "https://hw.menardc.com/main/items/media/IRWIN001/ProductLarge/LT_1402L3_VG6LN.jpg",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 4,
      partable_part_number: 254185,
      global_part_number: 96587487,
      part_name: "Volt Meter",
      image_url: "https://m.media-amazon.com/images/I/71XoeLBrd-L._SX342_.jpg",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 5,
      partable_part_number: 365847,
      global_part_number: 58718333,
      part_name: "Torx Set",
      image_url: "https://images.thdstatic.com/productImages/49bb298b-6101-4a47-ba05-8783b386f10a/svn/husky-socket-sets-hetx13pc-64_1000.jpg",
      in_stock: false,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 6,
      partable_part_number: 858598,
      global_part_number: 22554477,
      part_name: "G-Wiring Kit",
      image_url: "https://www.ss396.com/mm5/graphics/00000001/TSP-HC7108a.jpg",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 7,
      partable_part_number: 474944,
      global_part_number: 55447788,
      part_name: "Air Ratchet",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yyQqL93wC15_jlKW1yxbn6RN4KP_fTjD1lBGVGFxnV3s_9Goa_T6O_64UlheNuoL36c&usqp=CAU",
      in_stock: false,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
    {
      id: 8,
      partable_part_number: 9857474,
      global_part_number: 99668874,
      part_name: "Fuller Screws",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxyGXAn-mir03Rwli6BQ_a7s9YZKtChEGKA&usqp=CAU",
      in_stock: true,
      description:
        "This is an example description for an item. This will be long form on the ViewPart page, and short form on the PartList page, via a substring method.",
    },
  ];
  const [parts, setParts] = useState(possibleParts);
  const [partView, setPartView] = useState({});
  const [show, setShow] = useState(false);

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
              part.part_name.toLowerCase().includes(lowercaseSearch) || part.partable_part_number.toString().toLowerCase().includes(lowercaseSearch)
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
              <Part handleClose={handleClose} handleShow={handleShow} part={part} setPartView={setPartView} />
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
          <Button variant="primary" onClick={handleClose}>
            Add to Quote
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PartList;
