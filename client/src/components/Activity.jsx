import React from "react";

export default function Activity({ name, difficulty, duration, seasson }) {
  return (
    <div>
      <h2>Actividades</h2>
      <p>
        <strong>Actividad: </strong>
        {name}
      </p>
      <p>
        <strong>Dificultad: </strong>
        {difficulty}
      </p>
      <p>
        <strong>Duracion: </strong>
        {duration}
      </p>
      <p>
        <strong>Temporada: </strong>
        {seasson}
      </p>
    </div>
  );
}
