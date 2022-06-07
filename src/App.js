import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import TicketStats from "./components/TicketStats";
import TicketForm from "./components/TicketForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { TicketProvider } from "./contex/TicketContex";

function App() {
  return (
    <TicketProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <TicketForm />
                  <TicketStats />
                  <TicketList />
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </TicketProvider>
  );
}
export default App;
