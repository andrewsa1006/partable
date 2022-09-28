import "./Body.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
      <Card className="mt-4">
        <Card.Title style={{ fontSize: "2.2rem" }} className="mt-2">
          Don't just take our word for it - Listen to our customers!
        </Card.Title>
        <div style={{ border: "2px solid black", borderRadius: "10px" }} className="mt-3 extra-content bg-secondary text-white">
          <h3 style={{ textAlign: "start", marginLeft: "10px", borderBottom: "1px black solid" }} className="mb-3  mt-2">
            Mark, From X -
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ margin: "10px", border: "1px solid white", borderRadius: "5px" }}
              width="210"
              height="210"
              src={require("../assets/profile1.jpg")}
              alt="profile 1"
            />
            <p style={{ padding: "10px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui voluptate dolorem at, quas, sequi beatae est numquam corrupti
              accusantium fugit consectetur delectus voluptatum dolore! Natus numquam error aliquid. Exercitationem temporibus harum esse sed. Sunt
              itaque rerum veniam enim quos, explicabo temporibus, accusamus earum quae ut laudantium esse dignissimos ipsam quasi non. Aut velit
              aspernatur magnam alias a soluta modi, illum necessitatibus, ipsa ex ducimus impedit quam fuga iste pariatur non, reiciendis hic ipsam
              commodi quisquam sed unde minima? Inventore et sint commodi nesciunt quo magnam, placeat vitae facilis corporis, pariatur dolorem
              repellendus delectus suscipit! Veniam, dolore, harum unde hic molestiae doloremque repellendus est sed ipsam dicta aliquid iure ab.
              Omnis fuga quidem doloremque et illo obcaecati atque sit possimus."
            </p>
          </div>
        </div>
        <div style={{ border: "2px solid black", borderRadius: "10px" }} className="mt-3 extra-content bg-light">
          <h3 style={{ textAlign: "end", marginRight: "10px", borderBottom: "1px black solid" }} className="mb-3  mt-2">
            - Lisa, from somwhere
          </h3>
          <div style={{ display: "flex" }}>
            <p style={{ padding: "10px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui voluptate dolorem at, quas, sequi beatae est numquam corrupti
              accusantium fugit consectetur delectus voluptatum dolore! Natus numquam error aliquid. Exercitationem temporibus harum esse sed. Sunt
              itaque rerum veniam enim quos, explicabo temporibus, accusamus earum quae ut laudantium esse dignissimos ipsam quasi non. Aut velit
              aspernatur magnam alias a soluta modi, illum necessitatibus, ipsa ex ducimus impedit quam fuga iste pariatur non, reiciendis hic ipsam
              commodi quisquam sed unde minima? Inventore et sint commodi nesciunt quo magnam, placeat vitae facilis corporis, pariatur dolorem
              repellendus delectus suscipit! Veniam, dolore, harum unde hic molestiae doloremque repellendus est sed ipsam dicta aliquid iure ab.
              Omnis fuga quidem doloremque et illo obcaecati atque sit possimus."
            </p>
            <img
              style={{ margin: "10px", border: "1px solid white", borderRadius: "5px" }}
              width="210"
              height="210"
              src={require("../assets/profile2.jpg")}
              alt="profile 2"
            />
          </div>
        </div>
        <div style={{ border: "2px solid black", borderRadius: "10px" }} className="mt-3 extra-content bg-secondary text-white">
          <h3 style={{ textAlign: "start", marginLeft: "10px", borderBottom: "1px black solid" }} className="mb-3  mt-2">
            Matthew, (He's a nice guy) -
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ margin: "10px", border: "1px solid white", borderRadius: "5px" }}
              width="210"
              height="210"
              src={require("../assets/profile3.jpg")}
              alt="profile 3"
            />
            <p style={{ padding: "10px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui voluptate dolorem at, quas, sequi beatae est numquam corrupti
              accusantium fugit consectetur delectus voluptatum dolore! Natus numquam error aliquid. Exercitationem temporibus harum esse sed. Sunt
              itaque rerum veniam enim quos, explicabo temporibus, accusamus earum quae ut laudantium esse dignissimos ipsam quasi non. Aut velit
              aspernatur magnam alias a soluta modi, illum necessitatibus, ipsa ex ducimus impedit quam fuga iste pariatur non, reiciendis hic ipsam
              commodi quisquam sed unde minima? Inventore et sint commodi nesciunt quo magnam, placeat vitae facilis corporis, pariatur dolorem
              repellendus delectus suscipit! Veniam, dolore, harum unde hic molestiae doloremque repellendus est sed ipsam dicta aliquid iure ab.
              Omnis fuga quidem doloremque et illo obcaecati atque sit possimus."
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Body;
