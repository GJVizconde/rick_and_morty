const http = require("http");
const { getCharById } = require("./controllers/getCharById");

PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`Server raised in port ${PORT}`);

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);

      getCharById(res, id);
    }
  })
  .listen(PORT, "Localhost");
