//importar o Model
import Veiculo from '../models/veiculo.js'

export default class VeiculoController{

    constructor(caminhoBase='veiculo/'){
        this.caminhoBase = caminhoBase
        
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            //cria o Aluno
           let fotoEnviada
           if(req.file!=null){
            console.log(" foi")
            fotoEnviada = req.file.buffer
           }
           else{
            console.log("nao foi")
            fotoEnviada = null
           }
           
            await Veiculo.create({
                marca:req.body.marca,
                modelo:req.body.modelo,
                ano:req.body.ano,
                precopordia:req.body.precopordia,
                foto:fotoEnviada
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Veiculo.find({})
            res.render(caminhoBase + 'lst', {Veiculos:resultado})
        }

         this.openEdt = async(req, res)=>{
            //passar quem eu quero editar
            const id = req.params.id
            console.log(id)
            const veiculo = await Veiculo.findById(id)
            console.log(veiculo)
            res.render(caminhoBase + "edt",
            {Veiculo:veiculo})
        }
        
         this.edt = async(req, res)=>{
            await Veiculo.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/'+caminhoBase + 'lst');
                
        }
        
        this.del = async(req, res)=>{
            await Veiculo.findByIdAndDelete(req.params.id)
            res.redirect('/'+caminhoBase + 'lst');
                
        }
        

    }
}