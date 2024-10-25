const express = require("express");
const router = express.Router();

const app = express();
const port = 3333;

const women = [
  {
    nome: 'Simara Conceição',
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora',
  },
  {
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',
  },
  {
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
  }
]

function showWomen(request, response) {
  response.json(women);
}

function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}

app.use(router.get("/mulheres", showWomen));
app.listen(port, showPort);