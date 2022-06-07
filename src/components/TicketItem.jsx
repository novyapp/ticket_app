import Card from "./shared/Card";
import propTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import TicketContext from "../contex/TicketContex";

export default function TicketItem({ item }) {
  const { deleteTicket, editTicket } = useContext(TicketContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteTicket(item.id)}>
        <FaTimes color="orange" />
      </button>
      <button className="edit" onClick={() => editTicket(item)}>
        <FaEdit color="orange" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

TicketItem.propTypes = {
  item: propTypes.object.isRequired,
};
