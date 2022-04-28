import express from "express";
import CadastroController from "../controllers/CadastroController.js";

const router = express.Router();

router
    .get("/Cadastro", CadastroController.listarCadastros)
    .get('/cadastro/:id', CadastroController.listarCadastroporid)
    .post('/Cadastro', CadastroController.cadastrarUsuario)
    .put('/cadastro/:id', CadastroController.atualizarCadastro)
    .delete('/cadastro/:id', CadastroController.excluirCadastro)
    
    

export default router;
