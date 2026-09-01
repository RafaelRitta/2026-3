import { ref } from 'node:process'
import conexao from '../config/conexao.js'

const Manutencao = conexao.Schema({
    oficina: {type:String, required:true},
    valor:{type:Number, required:true},
    data:{type:Date, required:true},
    veiculo:{type:String, required:true}
})

export default conexao.model('Manutencao',Manutencao)