import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { Nav } from "../styles/Nav";

export default function NavBar() {
  return (
    <Nav>
      <h2>Countries App</h2>
      <Link to="/create">
        <Button tertiary>Crear Actividad</Button>
      </Link>
    </Nav>
  );
}
