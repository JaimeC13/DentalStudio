import {Table, Column, Model, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import Servicio from './servicios';
import EspecialistaServicio from './especiliastaServicio';
import Cita from './citas';

@Table({
    tableName: 'especialistas',
})

export default class Especialista extends Model {
    @Column({
        type: DataType.STRING(30)
    })
    declare name: string

    @Column({
        type: DataType.STRING(30)
    })
    apellido!: string

    @Column({
        type: DataType.STRING(30)
    })
    especialidad!: string

    @Column({
        type: DataType.INTEGER
    })
    experiencia!: number

   

    @BelongsToMany(() => Servicio, ()=> EspecialistaServicio )
    servicios!: Servicio[];

   @HasMany(() => Cita )
   citas!: Cita[];
    


 
}

