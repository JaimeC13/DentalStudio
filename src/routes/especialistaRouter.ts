import { Router } from "express";
import { EspecialistaController } from "../controllers/especialistaController";

const router = Router();

router.post('/', EspecialistaController.createEspecialista);



export default router;