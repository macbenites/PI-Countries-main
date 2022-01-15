import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createActivity, getAllCountries, orderCountries } from "../actions";
import { validate } from "../utils/validation";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state) => state);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
    setTimeout(() => {
      dispatch(orderCountries("Asc"));
    }, 100);
  }, [dispatch]);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    seasson: "",
    countries: [],
  });

  const handleOnChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    setErrors(validate({ ...activity, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    let countries = [...activity.countries];
    if (countries.includes(e.target.value)) {
      alert("El pais ya esta seleccionado");
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });

      setErrors(
        validate({
          ...activity,
          countries: [...activity.countries, e.target.value],
        })
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
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDelete = (x) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((country) => country !== x),
    });
    setErrors(
      validate({
        ...activity,
        countries: activity.countries.filter((country) => country !== x),
      })
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !activity.name ||
      !activity.difficulty ||
      !activity.duration ||
      !activity.seasson ||
      !activity.countries.length
    ) {
      alert("Por favor, complete los campos");
    } else {
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
    }
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={activity.name}
        placeholder="Nombre de actividad"
        onChange={handleOnChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <label>Difficulty</label>
      <div>
        <label>Dificultad</label>
        <input
          type="radio"
          name="difficulty"
          value="1"
          onChange={handleCheck}
        />
        Muy fácil
        <input
          type="radio"
          name="difficulty"
          value="2"
          onChange={handleCheck}
        />
        Fácil
        <input
          type="radio"
          name="difficulty"
          value="3"
          onChange={handleCheck}
        />
        Medio
        <input
          type="radio"
          name="difficulty"
          value="4"
          onChange={handleCheck}
        />
        Difícil
        <input
          type="radio"
          name="difficulty"
          value="5"
          onChange={handleCheck}
        />
        Muy difícil
      </div>

      {errors.difficulty && <p>{errors.difficulty}</p>}
      <label>Duration</label>
      <input
        type="number"
        name="duration"
        value={activity.duration}
        placeholder="Duración en días"
        onChange={handleOnChange}
      />
      {errors.duration && <p>{errors.duration}</p>}
      <label>Seasson: </label>

      <div>
        <label>Temporada</label>
        <input
          type="radio"
          name="seasson"
          value="Verano"
          onChange={handleCheck}
        />
        Verano
        <input
          type="radio"
          name="seasson"
          value="Otoño"
          onChange={handleCheck}
        />
        Otoño
        <input
          type="radio"
          name="seasson"
          value="Invierno"
          onChange={handleCheck}
        />
        Invierno
        <input
          type="radio"
          name="seasson"
          value="Primavera"
          onChange={handleCheck}
        />
        Primavera
      </div>

      {errors.seasson && <p>{errors.seasson}</p>}
      <select name="countries" onChange={handleSelect}>
        <option value="">Select Countries</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {errors.countries && <p>{errors.countries}</p>}
      <div>
        {activity.countries.map((country, index) => (
          <div key={index}>
            <p>{country}</p>
            <button onClick={() => handleDelete(country)}>X</button>
          </div>
        ))}
      </div>

      <input type="submit" value="Guardar" />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000000;
  margin-top: 20px;
  margin-bottom: 20px;
`;
