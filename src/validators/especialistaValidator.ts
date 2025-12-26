import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validationMiddleware";


export const especialistaValidator = [
    body('name')
        .notEmpty().withMessage('El nombre del especialista es obligatorio')
        .isString().withMessage('El nombre del especialista debe ser una cadena de texto'),
    
    body('apellido')
            .notEmpty().withMessage('El apellido del especialista es obligatorio')
            .isString().withMessage('El apellido del especialista debe ser una cadena de texto'),

    body('especialidad')
            .notEmpty().withMessage('La especialidad del especialista es obligatoria')
            .isString().withMessage('La especialidad del especialista debe ser una cadena de texto'),

    body('experiencia')
            .notEmpty().withMessage('Los años de experiencia son obligatorios')
            .isInt({ gt: 0 }).withMessage('Los años de experiencia deben ser un número entero mayor que 0'),

            handleInputErrors
    ]

    export const eliminarEspecialistaValidator = [
        param('id')
        .isInt({ gt: 0 }).withMessage('El ID del especialista debe ser un número entero mayor que 0'),
        handleInputErrors
    ]
    

