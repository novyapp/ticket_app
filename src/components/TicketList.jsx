import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ticket}) {
  console.log(ticket);
  if (!ticket || ticket.length === 0) {
    return <p>No Tickets yet</p>;
  }
  return (
    <div className="feedback-list">
      {ticket.map((item) => (
        <TicketItem key={item.id} item={item} />
      ))}
    </div>
  );
}
