import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState([
    {
      id: 1,
      text: "This items is from context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This items is from context 2",
      rating: 4,
    },
    {
      id: 3,
      text: "This items is from context 3",
      rating: 1,
    },
  ]);
  const [ticketEdit, setTicketEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteTicket = (id) => {
    if (window.confirm("are you sure?")) {
      setTicket(ticket.filter((item) => item.id !== id));
    }
  };

  const addTicket = (newTicket) => {
    newTicket.id = uuidv4();
    setTicket([newTicket, ...ticket]);
  };

  const editTicket = (item) => {
    setTicketEdit({
      item,
      edit: true,
    });
  };
  const updateTicket = (id, updItem) => {
    setTicket(
      ticket.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <TicketContext.Provider
      value={{
        ticket,
        deleteTicket,
        addTicket,
        editTicket,
        ticketEdit,
        updateTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
