import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRIES_BY_ID";
export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";

// export const getAllCountries = (name) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/countries?name=${name}`)
//       .then((response) => {
//         response.json().then((data) => {
//           dispatch({
//             type: GET_ALL_COUNTRIES,
//             payload: data,
//           });
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const getAllCountries = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=${name ? name : ""}`)
      .then((response) => {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getCountryById = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        return dispatch({
          type: GET_COUNTRY_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const filterCountryByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

export const orderCountries = (payload) => {
  return {
    type: ORDER_COUNTRIES,
    payload,
  };
};
export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};
