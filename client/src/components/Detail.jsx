import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../actions";
import {
  Container,
  Content,
  Info,
  Activities,
  ActDiv,
  BtnDetail,
  TopDetail,
} from "../styles/Detail";

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
                {parseInt(country.area).toLocaleString()} km²
              </div>
              <div>
                <span>Habitantes</span>
                {parseInt(country.population).toLocaleString()}
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
