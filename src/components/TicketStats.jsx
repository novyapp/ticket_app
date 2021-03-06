import React, { useContext } from "react";
import TicketContext from "../contex/TicketContex";

export default function TicketStats() {
  const { ticket } = useContext(TicketContext);
  let average =
    ticket.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / ticket.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{ticket.length} Ongoing Tickets</h4>
      <h4>Average fire: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
