import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import FeedbackData from "./data/Feedbackata";
import TicketStats from "./components/TicketStats";
import TicketForm from "./components/TicketForm";

function App() {
    const [ticket, setTicket] = useState(FeedbackData);
    const deleteTicket = (id) => {
      if (window.confirm('are you sure?')) {
        setTicket(ticket.filter((item) => item.id !== id ))
      }
      
    }
    const addTicket = (newTicket) => {
      newTicket.id = uuidv4()
      setTicket([newTicket, ...ticket ])
    }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>Hellow</h1>
        <TicketForm handleAdd={addTicket} />
        <TicketStats ticket={ticket} />
        <TicketList ticket={ticket} handleDelete={deleteTicket} />
      </div>
    </Fragment>
  );
}
export default App;
