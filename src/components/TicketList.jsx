import React, { useContext } from "react";
import TicketItem from "./TicketItem";
import { motion, AnimatePresence } from "framer-motion";
import TicketContext from "../contex/TicketContex";

export default function TicketList() {
  const { ticket } = useContext(TicketContext);

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
            <TicketItem key={item.id} item={item} />
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

