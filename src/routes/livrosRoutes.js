import express from "express"; 
import livroController from "../controller/livroController.js";

const router = express.Router();

router
 .get("/livros", livroController.listaLivros)
 .get("/livros/buscar",livroController.listarLivroPorEditora)
 .get("/livros/:id", livroController.buscaId)
 .post("/livros",livroController.cadastrarLivro)
 .put("/livros/:id", livroController.atualizarLivros)
 .delete("/livros/:id",livroController.deletaLivros)

 export default router;