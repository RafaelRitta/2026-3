import conexao from '../config/conexao.js'

const Veiculo = conexao.Schema({
    marca:{type:String, required:true},
    modelo:{type:String, required:true},
    ano:{type:Number, required:true},
    precopordia:{type:Number, required:true},
    foto:{type:Buffer, get: (valor) =>{
        if(!valor) return null;
        return `data:image/png;base64,${valor.toString('base64')}`;
    }
}
})

export default conexao.model('Veiculo',Veiculo)