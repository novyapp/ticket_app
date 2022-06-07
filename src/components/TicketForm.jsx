import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import TicketContext from "../contex/TicketContex";

export default function TicketForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addTicket, ticketEdit, updateTicket } = useContext(TicketContext);

  useEffect(() => {
    if (ticketEdit.edit === true) {
      setBtnDisabled(false);
      setText(ticketEdit.item.text);
      setRating(ticketEdit.item.rating);
    }
  }, [ticketEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at lest 10 characters!");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newTicket = {
        text: text,
        rating: rating,
      };
      if (ticketEdit.edit === true) {
        updateTicket(ticketEdit.item.id, newTicket);
      } else {
        addTicket(newTicket);
      }
    }
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Whats is your ticket?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write ticket"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
