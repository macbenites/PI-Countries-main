export const validate = (activity) => {
  let errors = {};
  if (!activity.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!activity.difficulty) {
    errors.difficulty = "La dificultad es obligatoria";
  } else if (activity.duration < 0) {
    errors.duration = "La duracion debe ser mayor a 0";
  } else if (!activity.seasson) {
    errors.seasson = "La temporada es obligatoria";
  }
  return errors;
};
