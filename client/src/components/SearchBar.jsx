import React from "react";
import { useDispatch } from "react-redux";
import { Search } from "../styles/SearchBar";
import { getAllCountries } from "../../src/actions";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(getAllCountries(e.target.value));
  };

  return (
    <Search
      type="text"
      placeholder="Search Country..."
      onChange={handleOnChange}
    />
  );
}
