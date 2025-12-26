import { db } from "../config/db"; 
import Especialista from "../models/especialista";
import Servicio from "../models/servicios";

export const crearEspecialista = async (data:any) => {

    const Transaction = await db.transaction();

    try{

        const{serviciosId, ...datosEspecialista} = data;
        const nuevoEspecialista = await Especialista.create(datosEspecialista, {transaction: Transaction});

        if (serviciosId && serviciosId.length > 0) { //validar que existan servicios 
            const serviciosEncontrados = await Servicio.findAll({
                where: { id: serviciosId },
                transaction: Transaction
            });

            await nuevoEspecialista.$set('servicios', serviciosEncontrados, { transaction: Transaction });
    }

    await Transaction.commit();
    
    return await Especialista.findByPk(nuevoEspecialista.id, {
            include: [Servicio]
        });

    }
    catch (error) {
        await Transaction.rollback();       
        throw error;

    }
}

export const obtenerEspecialistas = async () => {
    return await Especialista.findAll();
}

export const eliminarEspecialista = async (id:number) => {
    const especialista = await Especialista.findByPk(id);
    
    if (!especialista) {
        throw new Error('Especialista no encontrado');
    }

    return await especialista.destroy();




}

