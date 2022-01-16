export const validate = (activity) => {
  let errors = {};

  if (!activity.name) errors.name = "El nombre es requerido";
  if (!/^[a-zA-Z\s]+$/.test(activity.name))
    errors.name = "El nombre de la actividad debe contener solo letras";
  if (!activity.difficulty) errors.difficulty = "La dificultad es requerida";
  if (!activity.duration) errors.duration = "La duración es requerida";
  if (parseInt(activity.duration) < 1)
    errors.duration = "La duración debe ser mayor a 0";
  if (!activity.seasson) errors.seasson = "La temporada es requerida";
  if (activity.countries.length === 0)
    errors.countries = "El país es requerido";

  return errors;
};
