import { Router } from "express";
import { CitasController } from "../controllers/citasController";
import { citasValidator, eliminarCitaValidator } from "../validators/citasValidator";

const router = Router();

router.post('/', citasValidator, CitasController.createCita);
router.get('/', CitasController.getCitas);
router.delete('/:id', eliminarCitaValidator, CitasController.deleteCita);

export default router;