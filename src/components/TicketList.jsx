import React from "react";
import TicketItem from "./TicketItem";
import propTypes from "prop-types";

export default function TicketList({ ticket, handleDelete }) {
  console.log(ticket);
  if (!ticket || ticket.length === 0) {
    return <p>No Tickets yet</p>;
  }
  return (
    <div className="feedback-list">
      {ticket.map((item) => (
        <TicketItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticket: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
    })
  ),
};
