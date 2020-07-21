import React, { useState } from "react";
import {
  CaretLeftOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../redux/actions";
import { openNotification } from "./Notification";

const TicketGenerator = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket);
  const [number, setNumber] = useState("");

  const setTicket = (num) => {
    if (number.length < 6) {
      setNumber(number + num);
    }
  };

  const handleRemoveLast = () => {
    setNumber(number.slice(0, -1));
  };

  const handleDelete = () => {
    setNumber("");
  };

  const handleAdd = () => {
    if (number.length < 6) {
      openNotification("error", "Atleast 6 digits should be present");
    }
    if (ticket.includes(number)) {
      openNotification(
        "error",
        "Ticket already present. Please choose another ticket number"
      );
    } else {
      dispatch(addTicket(number));
      setNumber("");
    }
  };

  return (
    <div className="calc-body">
      <div className="calc-screen">
        <div className="calc-warning">
          {number.length < 6 ? (
            <Tag color="orange">Enter 6 digits.</Tag>
          ) : (
            <Tag color="green">Success. You can add now.</Tag>
          )}
        </div>
        <div className="calc-typed">
          {number}
          <span className="blink-me">_</span>
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => setTicket(1)}>
          1
        </div>
        <div className="button" onClick={() => setTicket(2)}>
          2
        </div>
        <div className="button" onClick={() => setTicket(3)}>
          3
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => setTicket(4)}>
          4
        </div>
        <div className="button" onClick={() => setTicket(5)}>
          5
        </div>
        <div className="button" onClick={() => setTicket(6)}>
          6
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => setTicket(7)}>
          7
        </div>
        <div className="button" onClick={() => setTicket(8)}>
          8
        </div>
        <div className="button" onClick={() => setTicket(9)}>
          9
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={handleRemoveLast}>
          <CaretLeftOutlined />
        </div>
        <div className="button" onClick={() => setTicket(0)}>
          0
        </div>
        <div className="button" onClick={handleDelete}>
          <DeleteOutlined style={{ color: "red" }} />
        </div>
      </div>
      <div className="calc-button-row">
        {ticket.length < 5 ? (
          <div className="button-add" onClick={handleAdd}>
            ADD TICKET <PlusSquareOutlined />
          </div>
        ) : (
          <div className="button-add">MAX TICKETS REACHED</div>
        )}
      </div>
    </div>
  );
};

export default TicketGenerator;
