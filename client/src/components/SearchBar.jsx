import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllCountries } from "../../src/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(getAllCountries(e.target.value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllCountries(search));
  };

  return (
    <Search>
      <input
        type="text"
        placeholder="Search Country..."
        onChange={handleOnChange}
      />
      {/* <button type="submit" onClick={}></button> */}
    </Search>
  );
}

const Search = styled.div`
  width: 300px;
  height: 2rem;
`;
