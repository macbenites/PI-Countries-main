import React from "react";
import styled from "styled-components";
import { LinkTo } from "../styles/Link";
export default function Country({ id, name, flags, continent, population }) {
  return (
    <CountryContainer>
      <Details to={`/home/detail/${id}`}>
        <img src={flags} width="250px" height="150px" alt="flag" />
        <h3>{name}</h3>
        <p>{continent}</p>
        <p>{population}</p>
      </Details>
    </CountryContainer>
  );
}

const CountryContainer = styled.div`
  background-color: #c4b6b6;
  border-radius: 1rem;
  width: 250px;
  height: 280px;
  padding: 0.5rem 0.5rem;
  img {
    border-radius: 1rem;
    margin: auto;
  }
  h3 {
    margin-bottom: 0;
  }
`;

const Details = styled(LinkTo)`
  color: #1b262c;
`;
