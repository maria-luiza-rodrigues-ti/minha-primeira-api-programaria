const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

function showWoman(request, response) {
  response.json({
    nome: "Simara Conceição",
    imagem: "https;//bit.ly/3LJIyOF",
    minibio: "Desenvolvedora e instrutora"
  });
}

function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

app.use(router.get('/mulher', showWoman));
app.listen(port, showPort)