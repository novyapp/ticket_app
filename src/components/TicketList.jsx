import React from "react";
import TicketItem from "./TicketItem";
import propTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

export default function TicketList({ ticket, handleDelete }) {
  console.log(ticket);
  if (!ticket || ticket.length === 0) {
    return <p>No Tickets yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {ticket.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TicketItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {ticket.map((item) => (
  //       <TicketItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
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
