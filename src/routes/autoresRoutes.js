import express from "express"; 
import AutorController from "../controller/autoresController.js";

const router = express.Router();

router
 .get("/autores", AutorController.listaAutores)
 .get("/autores/:id", AutorController.buscaId)
 .post("/autores",AutorController.cadastrarAutores)
 .put("/autores/:id", AutorController.atualizarAutores)
 .delete("/autores/:id",AutorController.deletaAutores)

 export default router;