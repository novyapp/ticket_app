import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ticket, setTicket] = useState([]);
  const [ticketEdit, setTicketEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    const response = await fetch("/ticket?_sort=id&_order=desc");
    const data = await response.json();

    setTicket(data);
    setIsLoading(false);
  };

  const deleteTicket = async (id) => {
    if (window.confirm("are you sure?")) {
      await fetch(`ticket/${id}`, { method: "DELETE" });

      setTicket(ticket.filter((item) => item.id !== id));
    }
  };

  const addTicket = async (newTicket) => {
    const response = await fetch("/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    const data = await response.json();

    setTicket([data, ...ticket]);
  };

  const editTicket = (item) => {
    setTicketEdit({
      item,
      edit: true,
    });
  };
  const updateTicket = async (id, updItem) => {
    const response = await fetch(`/ticket/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem)
    });
    const data = await response.json()

    setTicket(
      ticket.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <TicketContext.Provider
      value={{
        ticket,
        isLoading,
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
