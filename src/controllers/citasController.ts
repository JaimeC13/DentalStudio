import type { Request, Response } from 'express';
import { crearCita } from '../service/citasService';
import { citaInterface } from '../interface/interface';


export class CitasController {
    
    static createCita = async (req:Request , res: Response) => {
        try{
              const data: citaInterface = req.body;
                const citaSave = await crearCita(data);
                res.status(201).json(citaSave);
        }
        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

}