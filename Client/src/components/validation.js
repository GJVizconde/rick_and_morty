export const validar = (userData) => {
  const regexMail = /\S+@\S+\.\S+/;
  const regexNumber = /\d+/;
  const errors = {};

  //! mail

  if (!userData.email) {
    errors.email = "El usuario no puede estar vacio";
  }

  if (!regexMail.test(userData.email)) {
    errors.email = "El usuario deber ser un email";
  }

  if (userData.email.length > 35) {
    errors.email = "El nombre de usuario no puede tener mas de 35 caracteres";
  }

  //! PASSWORD

  if (!regexNumber.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe ser entre 6 y 10 caracteres";
  }

  return errors;
};
