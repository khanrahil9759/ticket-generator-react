import { ADD_TICKET, RANDOM_TICKET, DELETE_TICKET } from "./types";
import { openNotification } from "../components/Notification";

export const addTicket = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TICKET,
      payload: data,
    });
    openNotification("success", "Successfully Generated Ticket");
  } catch (err) {
    openNotification("error", "Error Generating Ticket");
  }
};

export const generateRandom = () => async (dispatch) => {
  const randomNumber = Math.floor(Math.random(100000, 999999) * 1000000);
  const data = randomNumber.toString();

  dispatch({
    type: RANDOM_TICKET,
    payload: data,
  });
};

export const deleteTicket = (item) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TICKET,
      payload: item,
    });
    openNotification("success", "Successfully Deleted Ticket");
  } catch (err) {
    openNotification("error", "Error Deleting Ticket");
  }
};
