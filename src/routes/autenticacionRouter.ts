import { Router } from "express";
import { AutenticacionController } from "../controllers/autenticacionController";




const router = Router();
router.post('/', AutenticacionController.createUsuario);



export default router;