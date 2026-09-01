import conexao from '../config/conexao.js'

const Cliente = conexao.Schema({
    nome: {type:String, required:true},
    numero:{type:String, required:true},
    cpf:{type:String, required:true},
    cnh:{type:String, required:true}
})

export default conexao.model('Cliente',Cliente)