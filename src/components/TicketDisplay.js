import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import TicketCard from "./TicketCard";

const TicketDisplay = () => {
  const tickets = useSelector((state) => state.ticket);
  return (
    <Row>
      <Col offset={2}></Col>
      <Fragment>
        {tickets.map((item, index) => {
          return (
            <TicketCard
              item={item}
              key={item}
              ticketNumber={item}
              num={index + 1}
            />
          );
        })}
      </Fragment>
    </Row>
  );
};

export default TicketDisplay;
