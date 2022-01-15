import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createActivity, getAllCountries, orderCountries } from "../actions";

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

  const validate = (activity) => {
    let errors = {};
    console.log(activity);
    if (!activity.name) {
      errors.name = "El nombre es requerido";
    } else if (!/^[a-zA-Z]+$/.test(activity.name)) {
      errors.name = "El nombre de la actividad debe contener solo letras";
    } else if (!activity.difficulty) {
      errors.difficulty = "La dificultad es obligatoria";
    } else if (parseInt(activity.duration) < 1) {
      errors.duration = "La duracion debe ser mayor a 0";
    } else if (!activity.seasson) {
      errors.seasson = "La temporada es requerida";
    } else if (activity.countries.length < 1) {
      errors.countries = "El pais es requerido";
    }
    return errors;
  };

  console.log(errors);

  let [activity, setActivity] = useState({
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
      setErrors({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });
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
    setErrors({
      ...activity,
      countries: activity.countries.filter((country) => country !== x),
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    !errors && dispatch(createActivity(activity));

    alert("Actividad creada");
    navigate("/home");

    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      seasson: "",
      countries: [],
    });
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
        required
      />
      {errors.name && <p>{errors.name}</p>}

      <label>Difficulty</label>
      <select onChange={handleOnChange} name="difficulty">
        <option value="">Elige un nivel</option>
        <option value="1">1- Muy fácil</option>
        <option value="2">2 - Fácil </option>
        <option value="3">3 - Medio</option>
        <option value="4">4 - Difícil</option>{" "}
        <option value="5">5- Muy díficil </option>
      </select>
      {errors.difficulty && <p>{errors.difficulty}</p>}

      <label>Duration</label>
      <input
        type="number"
        name="duration"
        value={activity.duration}
        placeholder="Days"
        onChange={handleOnChange}
      />
      {errors.duration && <p>{errors.duration}</p>}

      <label>Seasson: </label>
      <select onChange={handleOnChange} name="seasson">
        <option value="">Elige una estación</option>
        <option value="Verano">Varano</option>
        <option value="Otoño">Otoño</option>
        <option value="Invierno">Invierno</option>
        <option value="Primavera">Primavera</option>
      </select>
      {errors.seasson && <p>{errors.seasson}</p>}

      <select name="countries" onChange={handleSelect}>
        <option>Select Countries</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <div>
        {activity.countries.map((country, index) => (
          <div key={index}>
            <p>{country}</p>
            <button onClick={() => handleDelete(country)}>X</button>
          </div>
        ))}
      </div>
      {errors.countries && <p>{errors.countries}</p>}
      <input type="submit" value="Guardar" disabled={errors ? "true" : ""} />
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
