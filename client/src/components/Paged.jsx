import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../actions";
import { ContainerPage } from "../styles/Paged";

export default function Paged({ countriesPerPage }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const pageCountries = [];
  // Método actualizador del estado glabal de la página
  const changePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // Método para calcular el número de páginas

  for (let i = 0; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageCountries.push(i + 1);
  }

  return (
    <ContainerPage>
      {pageCountries?.map((page) => (
        <span onClick={() => changePage(page)} key={page}>
          {page}
        </span>
      ))}
    </ContainerPage>
  );
}
