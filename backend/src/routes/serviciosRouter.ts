import { Router } from "express";
import { servicioController } from "../controllers/servicioControlador";
import { servicioValidator, eliminarServicioValidator } from "../validators/servicioValidator"; 



const router = Router();

router.post('/', servicioValidator, servicioController.createServicio);

router.get('/', servicioController.getServicios);

router.delete('/:id', eliminarServicioValidator, servicioController.deleteServicio);

export default router;