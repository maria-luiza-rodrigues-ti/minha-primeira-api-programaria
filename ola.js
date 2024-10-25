const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showHello(request, response) {
  response.send("Olá, mundo!");
}

function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

app.use(router.get("/ola", showHello));
app.listen(port, showPort);

