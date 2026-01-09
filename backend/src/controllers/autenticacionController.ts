import type { Request, Response } from 'express';
import { crearUsuario } from '../service/autenticaciónService';



    export class AutenticacionController {

        static createUsuario = async (req:Request , res: Response) => {
                try{
                    const data = req.body;
                    const usuarioCreado = await crearUsuario(data);
                    res.status(201).json(usuarioCreado);
                }
                catch (error) {
                    res.status(500).json({message: 'Error interno del servidor'})
                    console.error(error);
                    console.log(req.body);
                }
            }



    }

