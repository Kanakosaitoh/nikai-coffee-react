import React from "react";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import india from "./india.jpg";

export default function Cards() {
  return (
    <div className="cards row d-flex justify-content-around mt-3">
      <div className="col-3">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={india} />
          <Card.Body>
            <Card.Title>India</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={india} />
          <Card.Body>
            <Card.Title>Columbia</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={india} />
          <Card.Body>
            <Card.Title>Guatemala</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={india} />
          <Card.Body>
            <Card.Title>Kenya</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
