import usuario from "../models/usuario";
import { hashPassword } from "../utils/auth";




export const crearUsuario= async (data:any) => {
    data.password = await hashPassword(data.password);
    return await usuario.create(data);
}
