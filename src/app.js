import express from "express";
import db from "./config/dbconfig.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Error de conexão"));
db.once("open", () => {
  console.log("Conection successful");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
