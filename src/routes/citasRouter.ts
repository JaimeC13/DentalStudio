import { Router } from "express";
import { CitasController } from "../controllers/citasController";

const router = Router();

router.post('/', CitasController.createCita);
router.post('/', CitasController.createCita);
router.post('/', CitasController.createCita);




export default router;