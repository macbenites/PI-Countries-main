import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "../styles/SearchBar";
import { Button } from "../styles/Button";
import { getAllCountries } from "../../src/actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    // dispatch(getAllCountries(e.target.value));
    setSearch(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Ingresar nombre del País");
    } else {
      dispatch(getAllCountries(search));
      setSearch("");
    }
  };

  return (
    <div>
      <Search
        type="text"
        placeholder="Search Country..."
        onChange={handleOnChange}
        value={search}
        autoComplete="off"
      />
      <Button type="submit" primary onClick={handleOnClick}>
        Buscar
      </Button>
    </div>
  );
}
