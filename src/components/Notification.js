import { notification } from "antd";

export const openNotification = (type, message) => {
  notification[type]({
    message: message,
    duration: 2,
  });
};
