import type { Request, Response } from 'express';
import { crearCita, obtenerCitas, eliminarCita } from '../service/citasService';
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
            console.error(error);
        }
    }


    static getCitas = async (req:Request , res: Response) => {
        try{
                const citas = await obtenerCitas();
                res.status(200).json(citas);
        }
        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }


    static deleteCita = async (req:Request , res: Response) => {
        try {
            const { id } = req.params;
            await eliminarCita(Number(id));
            res.status(200).json({ message: 'Cita eliminada correctamente' });
        }

        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}