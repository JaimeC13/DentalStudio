import {Table, Column, Model, DataType, BelongsToMany, ForeignKey} from 'sequelize-typescript';
import Especialista from './especialista';
import EspecialistaServicio from './especiliastaServicio';



@Table({
    tableName: 'servicios',
})

export default class Servicio extends Model {

    @Column({
        type: DataType.STRING(30)
    })
    declare name: string  

    @Column({
        type: DataType.DECIMAL
    })
    declare price: number

     @BelongsToMany(() => Especialista, ()=> EspecialistaServicio )
      epecialista!: Especialista[];



}

