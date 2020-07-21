import React from "react";
import { Card, Col, Tag, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../redux/actions";

const TicketCard = ({ ticketNumber, num, item }) => {
  const dispatch = useDispatch();
  return (
    <Col span={4}>
      <Card
        className="ticket-card"
        hoverable
        actions={[
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={() => {
              dispatch(deleteTicket(item));
            }}
            okText="Delete"
            cancelText="No"
          >
            <DeleteOutlined key="delete" style={{ color: "red" }} />
          </Popconfirm>,
        ]}
      >
        <Tag style={{ textAlign: "start" }} color="#2f2d51">
          Ticket # {num}
        </Tag>
        <h1 style={{ color: "#93d8f8", textAlign: "center" }}>
          {ticketNumber}
        </h1>
      </Card>
    </Col>
  );
};

export default TicketCard;
