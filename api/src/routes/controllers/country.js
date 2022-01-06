const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");
const axios = require("axios");

// finddOrCreate busca si existe un registro según las condiciones de búsqueda y
// si no encuentra ninguno procede a crear uno nuevo. Luego retorna la instancia
// creada o encontrada y un booleano indicando cual de los dos caminos tomó
const getApi = async () => {
  try {
    let countries = (await axios.get("https://restcountries.com/v3/all")).data;
    // let name = countries[0].name;
    countries = await Promise.all(
      countries.map((country) => {
        Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags[0],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "Not found",
            subregion: country.subregion ? country.subregion : "Not found",
            area: country.area,
            population: country.population,
          },
        });
      })
    );
    // console.log(name);
    return "¡ Database loaded ! =)";
  } catch (error) {
    return error;
  }
};

const getAllCountries = async () => {
  const countries = await Country.findAll({
    attributes: ["id", "name", "flags", "continent", "population"],
    include: Activity,
  });
  //[countries] || []
  return countries;
};

const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
    attributes: ["id", "name", "flags", "continent", "capital", "population"],
    include: Activity,
  });

  //[country] || []
  return country;
};

const getCountries = async (req, res) => {
  const { name } = req.query;
  let data;
  try {
    if (name) {
      data = await getCountryByName(name);
      data.length > 0
        ? res.send(data)
        : res.status(404).send({ message: "Country not found" });
    } else {
      data = await getAllCountries();
      data.length > 0
        ? res.send(data)
        : res.status(404).send({ message: "No countries " });
    }
  } catch (error) {
    res.send(error);
  }
};

const getCountriesById = (req, res) => {
  const { id } = req.params;

  // let country = await Country.findByPk(id, {
  //   include: Activity,
  // });
  // country
  //   ? res.json(country)
  //   : res.status(404).json({ message: "Country not found" });

  // la promesa findByPk se resuelve con el resultado de la consulta
  // sinó se resuelve con null
  Country.findByPk(id.toUpperCase(), {
    attributes: [
      "id",
      "name",
      "flags",
      "continent",
      "population",
      "capital",
      "subregion",
      "area",
    ],
    include: Activity,
  })
    .then((country) => {
      country
        ? res.send(country)
        : res.status(404).send({ message: "Country not found" });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getApi,
  getCountries,
  getCountriesById,
  getAllCountries,
  getCountryByName,
};
