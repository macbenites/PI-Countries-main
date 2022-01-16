import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div>
      {country?.name ? (
        <div>
          <div>
            <Link to="/home">
              <button>Volver</button>
            </Link>
          </div>
          <img src={country.flags} alt={country.name} />
          <div>
            <p>
              <strong>País:</strong> {country.name}
            </p>
            <p>
              <strong>Continente:</strong>
              {country.continent}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
            <p>
              <strong>Subregión:</strong> {country.subregion}
            </p>
            <p>
              <strong>Área:</strong> {country.area} km2
            </p>
            <p>
              <strong>Población:</strong> {country.population} habitantes
            </p>
            <div>
              <div>
                {country.activities.length > 0 ? (
                  country.activities?.map((activity) => (
                    <Activity
                      name={activity.name}
                      difficulty={activity.difficulty}
                      duration={activity.duration}
                      seasson={activity.seasson}
                    />
                  ))
                ) : (
                  <p>No hay actividades para este país</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No existe Pais...</h1>
      )}
    </div>
  );
}

export default Detail;
