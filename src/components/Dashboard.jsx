import React from "react";
// import DoughnutChart from './DoughnutChart';
import AdsInsightsTable from "./AdsTable";
import { Grid } from "@mui/material";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <div style={{ marginTop: "10px" }}>
          <Row>
            <Col>
              <Card style={{ width: "40rem", marginLeft: "-40px" }}>
                <Card.Header>
                  <h7>Ad Insights</h7>
                </Card.Header>
                <Card.Body className="text-center">
                  <AdsInsightsTable />
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "30rem" }}>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h7>Ad Insights</h7>
                    </div>
                    <div>
                      <select name="cars" id="cars">
                        <option value="volvo">Click</option>
                        <option value="saab">Click 2</option>
                        <option value="opel">Click 3</option>
                        <option value="audi">Click 3</option>
                      </select>
                      <button
                        style={{
                          border: "0.5px solid",
                          borderColor: "#F8F8F8",
                          marginLeft: "5px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      >
                        &nbsp;?&nbsp;
                      </button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="text-center">
                  <h2>Doughnut Chart</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
