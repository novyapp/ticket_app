import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import FeedbackData from "./data/Feedbackata";
import TicketStats from "./components/TicketStats";
import TicketForm from "./components/TicketForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [ticket, setTicket] = useState(FeedbackData);
  const deleteTicket = (id) => {
    if (window.confirm("are you sure?")) {
      setTicket(ticket.filter((item) => item.id !== id));
    }
  };
  const addTicket = (newTicket) => {
    newTicket.id = uuidv4();
    setTicket([newTicket, ...ticket]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <TicketForm handleAdd={addTicket} />
                <TicketStats ticket={ticket} />
                <TicketList ticket={ticket} handleDelete={deleteTicket} />
              </Fragment>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      <AboutIconLink />
      </div>
    </Router>
  );
}
export default App;
