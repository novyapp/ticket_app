import Card from "./shared/Card";
import propTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export default function TicketItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="orange" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

TicketItem.propTypes = {
  item: propTypes.object.isRequired,
};
