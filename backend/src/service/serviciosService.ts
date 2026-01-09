import Servicio from "../models/servicios";
import { servicioInterface } from "../interface/interface";


export const crearServicio = async (data:servicioInterface) => {
    return await Servicio.create(data as any);
}

export const obtenerServicios = async () => {
    return await Servicio.findAll();
}

export const eliminarServicio = async (id:number) => {
    const servicio = await Servicio.findByPk(id);

    if (!servicio) {
        throw new Error('Servicio no encontrado');
    }

    return await servicio.destroy();

}
