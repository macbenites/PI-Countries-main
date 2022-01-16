import styled from "styled-components";
import { Button } from "../styles/Button";

import SearchBar from "./SearchBar";
export default function Filters({
  activities,
  handleClick,
  handleOrdered,
  handleFilterContinent,
  handleFilterActivity,
}) {
  return (
    <Filter>
      <Button secondary onClick={handleClick}>
        Cargar Paises
      </Button>
      <SearchBar />
      <select onChange={handleOrdered}>
        <option value="">Seleccione orden</option>
        <option value="Asc">Nombre Asc</option>
        <option value="Desc">Nombre Desc</option>
        <option value="Min">Población Asc</option>
        <option value="Max">Población Desc</option>
      </select>
      <select onChange={handleFilterContinent}>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Ocenia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
      <select onChange={handleFilterActivity}>
        <option value="All">Todas</option>
        {activities?.map((activity, index) => (
          <option key={index} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </Filter>
  );
}

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  select {
    display: inline-block;
    width: 220px;
    cursor: pointer;
    padding: 7px 10px;
    outline: none;
    border: none;
    background: #f0f0f0;
    font-size: 1em;
    color: var(--background-color);
    font-family: "Quicksand", sans-serif;
    border: 2px solid rgba(18, 117, 109, 0.2);
    border-radius: 0.75rem;
    position: relative;
  }
`;
