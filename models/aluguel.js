import conexao from '../config/conexao.js'

const Aluguel = conexao.Schema({
    cliente:{type: conexao.Types.ObjectId, ref: "Cliente", required:true},
    valor:{type:Number, required:true},
    data:{type:Date, required:true},
    veiculo:{type: conexao.Types.ObjectId, ref: "Veiculo", required: true},
})

export default conexao.model('Aluguel',Aluguel)