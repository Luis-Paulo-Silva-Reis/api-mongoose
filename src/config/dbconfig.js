import mongoose from "mongoose"

mongoose.connect('mongodb+srv://luispaulosilvareis:123@cadastro.tsh9k.mongodb.net/Cadastro?')

let db = mongoose.connection

export default db;