const express = require("express"); // inicia express
const router = express.Router(); // configura a primeira parte da rota
const cors = require("cors"); // instalando o cors para permitir que a api seja utilizada no front-end

const connectToDataBase = require('./bancoDeDados') // aqui estou ligando ao arquivo BD
connectToDataBase() // chamando a função que conecta o BD

const Woman = require('./mulherModel') // aqui estou ligando ao arquivo BD

const app = express(); // inicia o app
app.use(express.json());
app.use(cors());
const port = 3333; // cria a porta


// GET
async function showWomen(request, response) {

  try {
    const databaseWomen = await Woman.find()
    response.json(databaseWomen)
  } catch (error) {
    console.log(error)
  }
}

// POST
async function createWomen(request, response) {
  const newWoman = new Woman({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
  })

  try {
    const womanCreated = await newWoman.save()

    response.status(201).json(womanCreated)
  } catch (error) {
    console.log(error)
  }
}

// PATCH
async function updateWoman(request, response) {

  try {
    const womanFound = await Woman.findById(request.params.id)

    if (request.body.nome) {
      womanFound.nome = request.body.nome
    }
    if (request.body.imagem) {
      womanFound.imagem = request.body.imagem
    }
    if (request.body.minibio) {
      womanFound.minibio = request.body.minibio
    }

    if (request.body.citacao) {
      womanFound.citacao = request.body.citacao
    }

    const womanUpdatedOnDatabase = await womanFound.save()

    response.json(womanUpdatedOnDatabase)
  } catch (error) {
    console.log(error)
  }
}

//DELETE
async function deleteWoman(request, response) {

  try {
    await Woman.findByIdAndDelete(request.params.id);

    response.json({ message: "Mulher deletada com sucesso" })

  } catch (error) {
    console.log(error)
  }
}

// PORTA
function showPort() {
  console.log("Servidor criado e rodando na porta ", port);
}


app.use(router.get("/mulheres", showWomen)); // configura a segunda parte da rota - GET MULHERES
app.use(router.post("/mulheres", createWomen)); // configura a segunda parte da rota - POST MULHER
app.use(router.patch("/mulheres/:id", updateWoman)); // configura a segunda parte da rota - PATCH MULHER
app.use(router.delete("/mulheres/:id", deleteWoman)) // configura a segunda parte da rota - DELETE MULHER

app.listen(port, showPort); // ouvindo a porta