import { Router } from "express";
import { servicioController } from "../controllers/servicioControlador";

const router = Router();

router.post('/', servicioController.createServicio);
router.get('/', servicioController.getServicios);
router.delete('/:id', servicioController.deleteServicio);

export default router;