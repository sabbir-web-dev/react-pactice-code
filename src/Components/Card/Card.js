import React, { Component } from "react";
import "./card.css"
import { FaBootstrap } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


class CardComponents extends Component {
  render() {
    return (
      <div className="card-wrap">
        <Card style={{ width: "18rem" }}>
          <FaBootstrap className="icon" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
       
      </div>
    );
  }
}

export default CardComponents;
