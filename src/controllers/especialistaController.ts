import type { Request, Response } from 'express';
import { crearEspecialista } from '../service/especialistaService';
import { especialistaInterface } from '../interface/interface';


export class EspecialistaController {


    static createEspecialista = async (req:Request , res: Response) => {
        try{
            const data : especialistaInterface = req.body;
            const especialistaSave = await crearEspecialista(data);

            res.status(200).json(especialistaSave);

        }
        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }




}