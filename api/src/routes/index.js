const { Router } = require("express");
const {
  getCountries,
  getCountriesById,
} = require("../routes/controllers/country.js");
const {
  getActivitiesByName,
  postActivity,
} = require("../routes/controllers/activity.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Importar todos los modelos;
const { Country, Activity, country_activity } = require("../db.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Obtener todos los paises

router.get("/countries", getCountries);
router.get("/countries/:id", getCountriesById);
router.get("/activities", getActivitiesByName);
router.post("/activity", postActivity);

module.exports = router;
