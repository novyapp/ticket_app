import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Card>
      <h2>About this project</h2>
      <p>This is ticket system</p>
      <p>Version 0.1</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  );
}
