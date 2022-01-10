const { Country, Activity } = require("../../db");

const getActivitiesByName = (req, res) => {
  Activity.findAll({
    attributes: ["name", "difficulty", "duration", "seasson"],
    include: [{ model: Country, attributes: ["name"] }],
  })
    .then((activities) => {
      res.status(200).send(activities);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};

const postActivity = async (req, res) => {
  //Recibimos la info de body
  const { name, difficulty, duration, seasson, countries } = req.body;

  try {
    //Creamos la actividad
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      seasson,
    });
    //Recorremos los paises del array countries
    //     for(i in countries){
    //       const country = await Country.findOne({
    //         where: {
    //           id: countries[i].slice(0,2).toUpperCase(), hola
    //         },
    //       });
    //       await country.addActivity(newActivity);
    //     }

    countries.forEach(async (country) => {
      const countryActivity = await Country.findOne({
        //finOne devuelve la primera instancia encontrada o null si no lo encuentra
        where: {
          name: country,
        },
      });
      await newActivity.addCountry(countryActivity);
    });
    res.status(200).send({ message: "Activity add successfully" });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getActivitiesByName, postActivity };
