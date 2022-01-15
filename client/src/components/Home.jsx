import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountryByContinent,
  orderCountries,
  filterCountryByActivity,
  getAllActivity,
} from "../../src/actions";
import { Link } from "react-router-dom";
import Country from "./Country";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Paged from "./Paged";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state);

  let countriesPerPage = page === 1 ? 9 : 10;
  const indexOfLastCountry = page * countriesPerPage; // 1 * 9 = 9 | 2 * 10 = 20 | 3 * 10 = 30
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // 9 - 9 = 0 | 20 - 10 = 10 | 30 - 10 = 20

  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Llamo a mi estado countries

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivity());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterCountryByActivity(e.target.value));
  };

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
  };

  return (
    <ContainerHome>
      <Filters>
        <Link to="/create">Crear Actividad</Link>
        <button onClick={handleClick}>Cargar Paises</button>
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
          {allActivity.map((activity, index) => (
            <option key={index} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </Filters>
      <Paged />
      <Countries>
        {currentCountries?.map((country, index) => (
          <Country
            key={index}
            id={country.id}
            name={country.name}
            flags={country.flags}
            continent={country.continent}
            population={country.population}
          />
        ))}
      </Countries>
    </ContainerHome>
  );
}

const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1.2rem;
`;

const ContainerHome = styled.div`
  padding: 2rem 0;
`;
const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  select,
  button {
    width: 200px;
    border-radius: 5px;
  }
`;
