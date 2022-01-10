import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <Landing>
      <h3>Henry PI</h3>
      <h1>Countries App</h1>
      <Link to="/home">
        <button>Start</button>
      </Link>
    </Landing>
  );
}

const Landing = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #c4b6b6;
`;
