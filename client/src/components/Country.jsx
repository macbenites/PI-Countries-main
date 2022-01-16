import React from "react";
import styled from "styled-components";
import { LinkTo } from "../styles/Link";
export default function Country({ id, name, flags, continent, population }) {
  return (
    <CountryContainer>
      <Details to={`/home/detail/${id}`}>
        <img src={flags} alt="flag" />
        <Info>
          <h2>{name}</h2>
          <p>
            <span>Continente</span> : {continent} <br />
            <span>Población</span> : {population}
          </p>
        </Info>
      </Details>
    </CountryContainer>
  );
}

const CountryContainer = styled.div`
  width: 285px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  img {
    width: 100%;
    height: 180px;
    border-radius: 1rem 1rem 0 0;
  }

  :hover {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  }
`;

const Details = styled(LinkTo)`
  color: var(--text-color);
`;

const Info = styled.div`
  margin-top: 0;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;

  height: 150px;
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: normal;
    span {
      font-weight: bold;
    }
  }
`;
