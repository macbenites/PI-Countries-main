import React from "react";
import { Link } from "react-router-dom";
import { Landing, Btn, Content, Title } from "../styles/Landing";

export default function LandingPage() {
  return (
    <Landing>
      <Content>
        <Title>
          <h2>Henry PI</h2>
          <h1>Countries App</h1>
        </Title>
        <Link to="/home">
          <Btn>Get Started</Btn>
        </Link>
      </Content>
    </Landing>
  );
}
