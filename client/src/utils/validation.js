export const validate = (activity) => {
  let errors = {};

  if (!activity.name) {
    errors.name = "El nombre es requerido";
  } else if (!/^[a-zA-Z\s]+$/.test(activity.name)) {
    errors.name = "El nombre de la actividad debe contener solo letras";
  } else if (!activity.difficulty) {
    errors.difficulty = "La dificultad es requerida";
  } else if (!activity.duration) {
    errors.duration = "La duración es requerida";
  } else if (parseInt(activity.duration) < 1) {
    errors.duration = "La duración debe ser mayor a 0";
  } else if (!activity.seasson) {
    errors.seasson = "La temporada es requerida";
  } else if (activity.countries.length < 1) {
    errors.countries = "El país es requerido";
  }
  return errors;
};
