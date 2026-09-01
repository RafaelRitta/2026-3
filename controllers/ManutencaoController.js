//importar o Model
import Manutencao from '../models/manutencao.js'

export default class ManutencaoController{

    constructor(caminhoBase='manutencao/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            //cria o Manutencao
           
            await Manutencao.create({
                oficina: req.body.oficina,
                valor:req.body.valor,
                data:req.body.data,
                veiculo:req.body.veiculo
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Manutencao.find({})
            res.render(caminhoBase + 'lst', {Manutencaos:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Manutencao.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Manutencaos:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            //passar quem eu quero editar
            const id = req.params.id
            console.log(id)
            const manutencao = await Manutencao.findById(id) 
            console.log(manutencao)
            res.render(caminhoBase + "edt", 
                {Manutencao:manutencao})
        }


        this.edt = async(req, res)=>{
        await Manutencao.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Manutencao.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}