
import { json } from "express";
import citas  from "../models/citas";
import Especialista from "../models/especialista";
import Servicio from "../models/servicios";
import {sendMail} from "../utils/mailer";

export const crearCita = async (data:any) => {
    
    const existeEspecialista = await Especialista.findByPk(data.especialistaId);
    const existeservice = await Servicio.findByPk(data.servicioId);

    if (!existeservice) {
        throw new Error('Servicio no encontrado');
    }

    if (!existeEspecialista) {
        throw new Error('Especialista no encontrado');
    }

   const nuevaCita = await citas.create(data);

   if (nuevaCita){
    await sendMail(data.correo, data.nombre, data.apellido, data.fecha, data.hora);

   }
    


   return nuevaCita;
}

export const obtenerCitas = async () => {

    if (!citas) {
        throw new Error('No hay citas disponibles');
    }

    return await citas.findAll();
}

export const eliminarCita = async (id:number) => {
    const cita = await citas.findByPk(id);  

    if (!cita) {
        throw new Error('Cita no encontrada');
    }

    return await cita.destroy();

}



