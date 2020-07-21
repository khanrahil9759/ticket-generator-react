import { ADD_TICKET, DELETE_TICKET, RANDOM_TICKET } from "./types";

export default function (state, { type, payload }) {
  switch (type) {
    case ADD_TICKET:
    case RANDOM_TICKET:
      return { ...state, ticket: [...state.ticket, payload] };
    case DELETE_TICKET:
      return {
        ...state,
        ticket: state.ticket.filter((item) => payload !== item),
      };
    default:
      return state;
  }
}
