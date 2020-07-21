import React from "react";
import Lottie from "react-lottie";
import { Button, Tag } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { generateRandom } from "../redux/actions";
import animationData from "../assets/close.json";

const RandomGenerator = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket);

  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      {ticket.length < 5 ? (
        <Button
          style={{
            borderRadius: 80,
            height: 300,
            width: 300,
            backgroundColor: "#93d8f8",
          }}
          onClick={() => dispatch(generateRandom())}
        >
          <SyncOutlined spin style={{ fontSize: 150 }} />
        </Button>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <Tag style={{ marginTop: 30 }} color="orange">
        Ticket ranges between 100000 - 999999
      </Tag>
      <h1
        style={{
          color: "#93d8f8",
        }}
      >
        CLICK TO GENERATE RANDOM TICKET
      </h1>
    </div>
  );
};

export default RandomGenerator;
