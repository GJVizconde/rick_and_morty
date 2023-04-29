const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          name,
          species,
          origin,
          image,
          gender,
          status,
        };
        return res.status(200).json(character);
      }

      return res.status(400).send("Not Found");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById,
};
