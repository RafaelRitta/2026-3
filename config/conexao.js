import mongoose from "mongoose";
//const url = mongodb+srv://aluno123:123@cluster0.sv9jqjy.mongodb.net/
const url = "mongodb+srv://aluno123:123@cluster0.sv9jqjy.mongodb.net/"
const conexao = await mongoose.connect(url)

export default conexao