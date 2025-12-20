

export interface servicioInterface {
    id?: number;
    name: string;
    price: number;
}

export interface especialistaInterface {
    id?: number;
    name: string;
    apellido: string;
    especialidad: string;
    experiencia: number;
    serviciosId?: number[];
}

export interface citaInterface {
    id?: number;
    name: string;
    apellido: string;
    correo: string;
    telefono: string;
    fecha: Date;
    especialistaId: number;
}