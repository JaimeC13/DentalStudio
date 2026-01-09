import type { Request, Response } from 'express';
import { crearEspecialista, obtenerEspecialistas, eliminarEspecialista } from '../service/especialistaService';
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

    static getEspecialistas = async (req:Request , res: Response) => {
        try {
            const especialistas = await obtenerEspecialistas();
            res.status(200).json(especialistas);

        }
        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    static deleteEspecialista = async (req:Request , res: Response) => {
        try {
            const { id } = req.params;
            await eliminarEspecialista(Number(id));
            res.status(200).json({ message: 'Especialista eliminado correctamente' });

        }
        catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }




}