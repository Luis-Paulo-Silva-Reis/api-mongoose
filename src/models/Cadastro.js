import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: Number, required: true }
  
});

const cadastro = mongoose.model("Cadastro", cadastroSchema);

export default cadastro;
