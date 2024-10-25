const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showTime(request, response) {
  const data = new Date();
  const hora = data.toLocaleTimeString('pt-BR');

  response.send(hora);
}

function showPort(request, response) {
  console.log("Servidor criado na porta: ", port)
}

app.use(router.get("/hora", showTime))
app.listen(port, showPort)