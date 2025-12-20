
import citas  from "../models/citas";
import Especialista from "../models/especialista";

export const crearCita = async (data:any) => {
    
    const existeEspecialista = await Especialista.findByPk(data.especialistaId);

    if (!existeEspecialista) {
        throw new Error('Especialista no encontrado');
    }
    
    return await citas.create(data);
}

