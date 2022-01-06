const { Country, Activity } = require("../../db");

const getActivitiesByName = (req, res) => {
  Activity.findAll({
    attributes: ["name", "difficulty", "duration", "seasson"],
  })
    .then((activities) => {
      res.json(activities);
    })
    .catch((error) => {
      res.send(error);
    });
};

const postActivity = async (req, res) => {
  //Recibo el body
  const { name, difficulty, duration, seasson, countries } = req.body;

  try {
    //Creo la actividad
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      seasson,
    });
    //Recorremos los paises que trae el body

    //     for (let i = 0; i < countries.length; i++) {
    //       //Recupero el pais
    //       const country = await Country.findOne({
    //         where: {
    //           id: countries[i].slice(0,2).toUpperCase(),
    //         },
    //       });
    //       //Creo la relacion
    //       await country.addActivity(newActivity);
    //     }

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

    // const countryActivity = await Country.findAll({
    //   where: {
    //     name: {
    //       [Op.in]: countries,
    //     },
    //   },
    // });
    res.json("Activity add successfully");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getActivitiesByName, postActivity };
