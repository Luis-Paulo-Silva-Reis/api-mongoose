import express from "express";
import Cadastro from "./cadastroRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "curso de node" });
  });

  app.use(express.json(), Cadastro);
};

export default routes;
