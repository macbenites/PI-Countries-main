import React, { useState } from "react";
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
import Loader from "./Loader";
import noResults from "../assets/noResults.svg";
import { ContainerHome, Countries } from "../styles/Home";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, page, allActivity } = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [, setOrder] = useState();
  let countriesPerPage = 10;
  const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 -1 = 9 | 2 * 10 -1 = 19 | 3 * 10 -1 = 29
  const indexOfFirstCountry =
    page === 1
      ? indexOfLastCountry - (countriesPerPage - 1)
      : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const timer = (time) =>
    setTimeout(() => {
      setLoader(false);
    }, time);

  useEffect(() => {
    setLoader(true);
    dispatch(getAllCountries());
    dispatch(getAllActivity());
    timer(1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
    setOrder(e.target.value);
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterCountryByActivity(e.target.value));
    setOrder(e.target.value);
  };

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setOrder(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(getAllCountries());
    timer(500);
    return () => clearTimeout(timer);
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
      <Paged countriesPerPage={countriesPerPage} />
      <Countries>
        {loader ? (
          <Loader />
        ) : (
          currentCountries?.map((country, index) => (
            <Country
              key={index}
              id={country.id}
              name={country.name}
              flags={country.flags}
              continent={country.continent}
            />
          ))
        )}
        {countries.length === 0 && (
          <div>
            <img src={noResults} alt="no Results" />
            <h1>No se encontraron resultados</h1>
          </div>
        )}
      </Countries>
    </ContainerHome>
  );
}
