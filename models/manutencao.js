import conexao from '../config/conexao.js'

const Manutencao = conexao.Schema({
    oficina: {type:String, required:true},
    valor:{type:Number, required:true},
    data:{type:Date, required:true},
    veiculo:{type: conexao.Types.ObjectId, ref: "Veiculo"},
})

export default conexao.model('Manutencao',Manutencao)