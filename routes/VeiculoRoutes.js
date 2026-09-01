import express from 'express';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();
//Busca o AlunoController
import VeiculoController from '../controllers/VeiculoController.js'
const controle = new VeiculoController();

const caminhobase = 'veiculo/'

router.get('/' + caminhobase + 'add', upload.single('foto'), controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'del/:id', controle.del)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', upload.single('foto'), controle.edt)
export default router