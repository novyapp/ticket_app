import { Fragment, useState } from "react";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import FeedbackData from "./data/Feedbackata";

function App() {
    const [ticket, setTicket] = useState(FeedbackData);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>Hellow</h1>
        <TicketList ticket={ticket} />
      </div>
    </Fragment>
  );
}
export default App;
