// API significa Application Programming Intarface
// é um sistema utilizado para comunição entre 2 ou mais computadores
// o front-end e o back-end ficam em portas diferentes
// POST(Create), GET(Read), PUT (Update) e DELETE (requisições HTTPS)
// CRUD - Create, Read, Update e Delete
// Endpoint são rotas a ser acessadas em uma API
// Middleware


import express from "express";
import cors from "cors";
import { db } from "./connect.js";


const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', async (request, response) => {
    response.send('Olá, Mundo!');
})

app.get('/artists', async (request, response) => {
    response.send( await db.collection('artists').find({}).toArray());
})

app.get('/songs', async (request, response) => {
    response.send( await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
});
