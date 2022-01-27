import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import trash from "../assets/trash.png";
import { Link } from "react-router-dom";
import {
  createActivity,
  getAllCountries,
  getAllActivity,
  orderCountries,
} from "../actions";

import {
  FormContainer,
  Country,
  InputLabel,
  Top,
  Content,
  Select,
  InputText,
  BtnForm,
  Error,
} from "../styles/Form";

import { validate } from "../utils/validation";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, allActivity } = useSelector((state) => state);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivity());
    const timer = setTimeout(() => {
      dispatch(orderCountries("Asc"));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    seasson: "",
    countries: [],
  });

  const arrActivities = allActivity.map((x) => x.name);

  const handleOnChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({ ...activity, [e.target.name]: e.target.value }, arrActivities)
    );
  };

  const handleSelect = (e) => {
    if (activity.countries.includes(e.target.value)) {
      alert("El pais ya esta seleccionado");
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });

      setErrors(
        validate(
          {
            ...activity,
            countries: [...activity.countries, e.target.value],
          },
          arrActivities
        )
      );
    }
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setActivity({
        ...activity,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(
      validate(
        {
          ...activity,
          [e.target.name]: e.target.value,
        },
        arrActivities
      )
    );
  };

  const handleDelete = (country) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((ctry) => ctry !== country),
    });
    setErrors(
      validate(
        {
          ...activity,
          countries: activity.countries.filter((ctry) => ctry !== country),
        },
        arrActivities
      )
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      activity.name &&
      activity.difficulty &&
      activity.duration &&
      activity.seasson &&
      activity.countries.length &&
      !Object.keys(errors).length
    ) {
      dispatch(createActivity(activity));
      alert("Actividad creada");
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        seasson: "",
        countries: [],
      });
      navigate("/home");
    } else {
      alert("Por favor, complete los campos o revise los errores");
    }
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Top>
        <h1>Crear Actividad</h1>
        <div>
          <Link to="/home">
            <BtnForm type="submit" secondary>
              Regresar
            </BtnForm>
          </Link>
          <BtnForm type="submit" tertiary>
            Guardar
          </BtnForm>
        </div>
      </Top>
      <hr />
      <Content>
        <div>
          <InputLabel>
            <p>Nombre </p>
            <InputText
              type="text"
              name="name"
              value={activity.name}
              autoComplete="off"
              placeholder="Nombre de actividad"
              onChange={handleOnChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputLabel>
          <InputLabel>
            <p>Dificultad</p>
            <input
              type="radio"
              name="difficulty"
              value="1"
              onChange={handleCheck}
            />
            Muy fácil
            <br />
            <input
              type="radio"
              name="difficulty"
              value="2"
              onChange={handleCheck}
            />
            Fácil
            <br />
            <input
              type="radio"
              name="difficulty"
              value="3"
              onChange={handleCheck}
            />
            Medio
            <br />
            <input
              type="radio"
              name="difficulty"
              value="4"
              onChange={handleCheck}
            />
            Difícil
            <br />
            <input
              type="radio"
              name="difficulty"
              value="5"
              onChange={handleCheck}
            />
            Muy difícil
            <br />
            {errors.difficulty && <Error>{errors.difficulty}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>Duración</p>
            <InputText
              type="number"
              name="duration"
              value={activity.duration}
              autoComplete="off"
              placeholder="Duración en días"
              onChange={handleOnChange}
            />

            {errors.duration && <Error>{errors.duration}</Error>}
          </InputLabel>
          <InputLabel>
            <p>Temporada</p>
            <input
              type="radio"
              name="seasson"
              value="Verano"
              onChange={handleCheck}
            />
            Verano
            <br />
            <input
              type="radio"
              name="seasson"
              value="Otoño"
              onChange={handleCheck}
            />
            Otoño
            <br />
            <input
              type="radio"
              name="seasson"
              value="Invierno"
              onChange={handleCheck}
            />
            Invierno
            <br />
            <input
              type="radio"
              name="seasson"
              value="Primavera"
              onChange={handleCheck}
            />
            Primavera
            <br />
            {errors.seasson && <Error>{errors.seasson}</Error>}
          </InputLabel>
        </div>
        <div>
          <InputLabel>
            <p>País</p>
            <Select name="countries" onChange={handleSelect}>
              <option value="">Seleccionar País</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
            {errors.countries && <Error>{errors.countries}</Error>}
            <div>
              {activity.countries.map((country, index) => (
                <Country key={index}>
                  {country}
                  <img
                    src={trash}
                    alt="trash"
                    onClick={() => handleDelete(country)}
                  />
                </Country>
              ))}
            </div>
          </InputLabel>
        </div>
      </Content>
    </FormContainer>
  );
}
