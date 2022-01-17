import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../actions";
import styled from "styled-components";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <Container>
      {country?.name ? (
        <div>
          <div>
            <img src={country.flags} width="100px" alt={country.name} />
            <span>{country.name}</span>
            <Link to="/home">
              <button>Volver</button>
            </Link>
          </div>
          <hr />
          <Content>
            <Info>
              <h1>Detalle</h1>
              <div>Continente : {country.continent}</div>
              <div>
                <span>Capital :</span>
                {country.capital}
              </div>
              <div>
                <span>Subregion:</span>
                {country.subregion}
              </div>
              <div>
                <span>Área :</span>
                {country.area} km2
              </div>
              <div>
                <span>Habitantes :</span>
                {country.population} habitantes
              </div>
            </Info>
            <Activities>
              {country.activities.length > 0 ? (
                country.activities?.map((activity, index) => (
                  <Activity
                    key={index}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    seasson={activity.seasson}
                  />
                ))
              ) : (
                <p>No hay actividades para este país</p>
              )}
            </Activities>
          </Content>
        </div>
      ) : (
        <h1>No existe Pais...</h1>
      )}
    </Container>
  );
}

const Container = styled.div`
  color: var(--text-color);
`;

const Content = styled.div`
  display: flex;
`;

const Info = styled.div`
  margin: 1rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 40%;
  padding: 2rem;
  border-right: 1px solid var(--border-color);
  h1 {
    margin: 1rem 0;
  }
  div {
    text-align: right;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    color: #fff2ee;
    font-size: 1.4rem;
  }
`;

const Activities = styled.div`
  margin: 1rem;
  background-color: blueviolet;
  width: 70%;
  padding: 1rem;
`;
