import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../actions";
import styled from "styled-components";
import { Button } from "../styles/Button";

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
          <TopDetail>
            <div>
              <img src={country.flags} width="100px" alt={country.name} />
              <h1>{country.name}</h1>
            </div>
            <Link to="/home">
              <BtnDetail type="submit" secondary>
                Regresar
              </BtnDetail>
            </Link>
          </TopDetail>
          <hr />
          <Content>
            <Info>
              <h1>Detalle</h1>
              <hr />
              <div>
                <span>Contiente</span> {country.continent}
              </div>
              <div>
                <span>Capital</span>
                {country.capital}
              </div>
              <div>
                <span>Subregion</span>
                {country.subregion}
              </div>
              <div>
                <span>Área</span>
                {country.area.toLocaleString()} km2
              </div>
              <div>
                <span>Habitantes</span>
                {country.population.toLocaleString()}
              </div>
            </Info>

            <Activities>
              <h1>Actividades</h1>
              <hr />
              <ActDiv>
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
                  <h3>No hay actividades para este país</h3>
                )}
              </ActDiv>
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
  margin: 2rem 0;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 40%;
  padding: 2rem;
  border-right: 1px solid var(--border-color);

  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: normal;
  }
  span {
    color: #fff2ee;
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
  }
  h1 {
    margin: 0.5rem 0;
  }
`;

const Activities = styled.div`
  margin: 2rem 0 0 2rem;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 60%;
  padding: 2rem;
  h3 {
    text-align: left;
    margin: 1rem 0;
  }
  h1 {
    margin: 0.5rem 0;
  }
`;

const ActDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 2.3rem;
`;

const BtnDetail = styled(Button)``;

const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 0.5rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
