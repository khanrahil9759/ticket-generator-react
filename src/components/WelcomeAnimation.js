import React, { useState } from "react";
import { Modal } from "antd";
import Lottie from "react-lottie";
import animationData from "../assets/sunny.json";

const WelcomeAnimation = () => {
  const [visible, setVisible] = useState(true);
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Modal
        style={{
          backgroundColor: "#93d8f8",
          textAlign: "center",
          color: "#93d8f8",
        }}
        visible={visible}
        footer={false}
        closable={false}
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          eventListeners={[
            {
              eventName: "loopComplete",
              callback: () => setVisible(false),
            },
          ]}
        />
        <h1
          style={{
            color: "#93d8f8",
          }}
        >
          Welcome !
        </h1>
      </Modal>
    </div>
  );
};

export default WelcomeAnimation;
