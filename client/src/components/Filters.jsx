import { Button } from "../styles/Button";
import { Filter } from "../styles/Filters";

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
      <select onChange={handleOrdered}>
        <option value="">Seleccione orden</option>
        <option value="Asc">Nombre Asc</option>
        <option value="Desc">Nombre Desc</option>
        <option value="Min">Población Asc</option>
        <option value="Max">Población Desc</option>
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
