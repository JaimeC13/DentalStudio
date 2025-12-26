import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validationMiddleware"

export const servicioValidator = [
    body('name')
        .notEmpty().withMessage('El nombre del servicio es obligatorio')
        .isString().withMessage('El nombre del servicio debe ser una cadena de texto'),
        
    body('price')
        .notEmpty().withMessage('El precio del servicio es obligatorio')
        .isFloat({ gt: 0 }).withMessage('El precio del servicio debe ser un número mayor que 0'),
    handleInputErrors
]

export const eliminarServicioValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID del servicio debe ser un número entero mayor que 0'),
    handleInputErrors
]



