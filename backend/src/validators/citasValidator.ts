import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validationMiddleware";


export const citasValidator = [
    body('fecha')
        .notEmpty().withMessage('La fecha de la cita es obligatoria')
        .isISO8601().withMessage('La fecha debe tener formato ISO8601'),

    body('hora')
        .notEmpty().withMessage('La hora de la cita es obligatoria')
        .isString().withMessage('La hora debe ser una cadena de texto'),

    body('especialistaId')
        .notEmpty().withMessage('El ID del especialista es obligatorio')
        .isInt({ gt: 0 }).withMessage('El ID del especialista debe ser un número entero mayor que 0'),

        body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),

    body('apellido')
        .notEmpty().withMessage('El apellido es obligatorio')
        .isString().withMessage('El apellido debe ser una cadena de texto'),

    body('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('El correo debe ser un correo válido'),

    body('telefono')
        .notEmpty().withMessage('El teléfono es obligatorio')
        .isString().withMessage('El teléfono debe ser una cadena de texto'),


    handleInputErrors
]

export const eliminarCitaValidator = [
    param('id')
    .isInt({ gt: 0 }).withMessage('El ID de la cita debe ser un número entero mayor que 0'),
    handleInputErrors
]