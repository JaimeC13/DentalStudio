import {Table, Column, Model, DataType, HasOne, ForeignKey, } from 'sequelize-typescript';
import Especialista from './especialista';
import Servicio from './servicios';



@Table({
    tableName: 'citas',
})

export default class Cita extends Model {

   

 @Column({
        type: DataType.STRING(30)
    })
    declare nombre: string

    @Column({
        type: DataType.STRING(30)
    })
    declare apellido: string

    @Column({
        type: DataType.STRING(50)
    })
    declare correo: string

    @Column({
        type: DataType.STRING(15)
    })
    declare telefono: string

    @Column({
        type: DataType.DATE
    })
    declare fecha: Date

    @Column({
        type: DataType.STRING(10)
    })
    declare hora: string

   @ForeignKey(() => Especialista)
   @Column({
        type: DataType.INTEGER,
        allowNull: false
   })
   especialistaId!: number;

   @ForeignKey(() => Servicio)
   @Column({
        type: DataType.INTEGER,
        allowNull: false
   })
   servicioId!: number;




}