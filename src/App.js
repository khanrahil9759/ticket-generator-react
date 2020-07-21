import React, { Fragment } from "react";
import { Row, Col } from "antd";
import WelcomeAnimation from "./components/WelcomeAnimation";
import TicketGenerator from "./components/TicketGenerator";
import RandomGenerator from "./components/RandomGenerator";
import TicketDisplay from "./components/TicketDisplay";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Row style={{ margin: "20px" }}>
        <Col span={8} offset={4}>
          <TicketGenerator />
        </Col>
        <Col span={8} className="container-2">
          <RandomGenerator />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TicketDisplay />
        </Col>
      </Row>
      <WelcomeAnimation />
    </Fragment>
  );
}

export default App;
