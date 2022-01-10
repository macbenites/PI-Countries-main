import {
  FILTER_BY_CONTINENT,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_CURRENT_PAGE,
  ORDER_COUNTRIES,
} from "../actions";

const initialState = {
  //array modificado
  countries: [],
  //copia de todos los paises
  allCountries: [],
  country: [],
  page: 1,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: payload,
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFilter =
        payload === "All"
          ? allCountries
          : allCountries.filter((country) => country.continent === payload);
      return {
        ...state,
        countries: continentFilter,
      };

    case ORDER_COUNTRIES:
      let ordered = state.countries;

      payload === "Desc" &&
        ordered.sort((a, b) => {
          // if (a.name < b.name) return -1;
          // if (a.name > b.name) return 1;
          // return 0;
          //ordenando caracteres no ASCII
          //localeCompare() return (-1, 0, 1)
          return a.name.localeCompare(b.name);
        });
      payload === "Asc" &&
        ordered.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      payload === "Max" &&
        ordered.sort((a, b) => {
          return b.population - a.population;
        });
      payload === "Min" &&
        ordered.sort((a, b) => {
          return a.population - b.population;
        });

      return {
        ...state,
        countries: ordered,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return { ...state };
  }
}
export default rootReducer;
