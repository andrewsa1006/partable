import "./Body.css";
import Tab from "react-bootstrap/tab";
import Tabs from "react-bootstrap/tabs";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Why Partable?</h3>
      <Tabs defaultActiveKey="innovative-solutions" id="why-partable" className="mb-3 mt-3" fill>
        <Tab eventKey="innovative-solutions" title="Innovative Solutions">
          <p>
            This is a bunch of example text for innovative solutions. This is a bunch of example text. This is a bunch of example text. This is a
            bunch of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch
            of example text.This is a bunch of example text.This is a bunch of example text. This is a bunch of example text. This is a bunch of
            example text. This is a bunch of example text.This is a bunch of example text.
          </p>
          <Button>Explore Contract Options</Button>
        </Tab>

        <Tab eventKey="unbeatable-prices" title="Unbeatable Prices">
          <p>
            This is a bunch of example text for unbeatable prices. This is a bunch of example text. This is a bunch of example text. This is a bunch
            of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch of
            example text.This is a bunch of example text.This is a bunch of example text. This is a bunch of example text. This is a bunch of example
            text. This is a bunch of example text.This is a bunch of example text.
          </p>
          <Button
            onClick={() => {
              navigate("/parts");
            }}
          >
            View Inventory
          </Button>
        </Tab>

        <Tab eventKey="fantastic-service" title="Fantastic Service">
          <p>
            This is a bunch of example text for fantastic service. This is a bunch of example text. This is a bunch of example text. This is a bunch
            of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch of example text. This is a bunch of
            example text.This is a bunch of example text.This is a bunch of example text. This is a bunch of example text. This is a bunch of example
            text. This is a bunch of example text.This is a bunch of example text.
          </p>
          <Button>Request Service Quote</Button>
        </Tab>
      </Tabs>
      <div className="mt-3 extra-content bg-secondary text-white">
        <h3 className="mb-3">Insert customer testimonial</h3>
        <p>
          Here is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here
          is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a
          long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good.
        </p>
      </div>
      <div className="mt-3 extra-content bg-light">
        <h3 className="mb-3">Insert customer testimonial</h3>
        <p>
          Here is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here
          is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a
          long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good.
        </p>
      </div>
      <div className="mt-3 extra-content bg-secondary text-white">
        <h3 className="mb-3">Insert customer testimonial</h3>
        <p>
          Here is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here
          is a long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a
          long customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good. Here is a long
          customer testimonial about why partable is so good. Here is a long customer testimonial about why partable is so good.
        </p>
      </div>
    </div>
  );
};

export default Body;
