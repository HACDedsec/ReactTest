import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MediaAdForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ marginTop: "10px", width: "90%" }}>
        <Container>
          <Card.Body>
            <h1> Media Form</h1>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
};

export default MediaAdForm;
