import type { Request, Response } from 'express';
import { crearServicio } from '../service/serviciosService';
import { obtenerServicios } from '../service/serviciosService';
import { servicioInterface } from '../interface/interface';
import { eliminarServicio } from '../service/serviciosService';

export class servicioController {

static createServicio = async (req:Request , res: Response) => {

    try {
        const data: servicioInterface = req.body; 
        const serviceSave = await crearServicio(data);
        res.status(201).json("Servicio creado correctamente");
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });

    }
}


static getServicios = async (req:Request , res: Response) => {

    try {
        const listService =  await obtenerServicios();
        res.status(200).json(listService);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

static deleteServicio = async (req:Request , res: Response) => {
    
    try {
        const { id } = req.params;
        await eliminarServicio(Number(id));
        res.status(200).json({ message: 'Servicio eliminado correctamente' });

    }
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}



}