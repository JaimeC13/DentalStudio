import { Router } from "express";
import { EspecialistaController } from "../controllers/especialistaController";
import { eliminarEspecialistaValidator, especialistaValidator } from "../validators/especialistaValidator";

const router = Router();

router.post('/', especialistaValidator, EspecialistaController.createEspecialista);
router.get('/', EspecialistaController.getEspecialistas);
router.delete('/:id', eliminarEspecialistaValidator, EspecialistaController.deleteEspecialista);

export default router;