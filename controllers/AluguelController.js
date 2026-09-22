//importar o Model
import Aluguel from '../models/aluguel.js'
import Veiculo from '../models/veiculo.js'
import Cliente from '../models/cliente.js'



export default class AluguelController{

    constructor(caminhoBase='aluguel/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            

            const a = await Veiculo.find({})
            const b = await Cliente.find({})

            res.render(caminhoBase + "add", {Veiculo: a, Cliente: b})
        }
        this.add = async(req, res)=>{
            //cria o Aluguel

            await Aluguel.create({
                cliente:req.body.cliente,
                valor:req.body.valor,
                data:req.body.data,
                veiculo:req.body.veiculo
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Aluguel.find({})
            res.render(caminhoBase + 'lst', {Aluguels:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Aluguel.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Aluguels:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            //passar quem eu quero editar
            const id = req.params.id
            console.log(id)
            const aluguel = await Aluguel.findById(id) 
            console.log(aluguel)
            res.render(caminhoBase + "edt", 
                {Aluguel:aluguel})
        }


        this.edt = async(req, res)=>{
        await Aluguel.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Aluguel.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}