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
import Country from "./Country";
import Paged from "./Paged";
import Filters from "./Filters";
import NavBar from "./NavBar";
import { ContainerHome, Countries } from "../styles/Home";

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

  // const currentCountries = sliceMethod(
  //   countries,
  //   indexOfFirstCountry,
  //   indexOfLastCountry
  // );

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
      <NavBar />
      <Filters
        activities={allActivity}
        handleClick={handleClick}
        handleOrdered={handleOrdered}
        handleFilterContinent={handleFilterContinent}
        handleFilterActivity={handleFilterActivity}
      />
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
