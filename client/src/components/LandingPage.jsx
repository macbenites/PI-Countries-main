import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
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
          <Button primary>Get Started</Button>
        </Link>
      </Content>
    </Landing>
  );
}
