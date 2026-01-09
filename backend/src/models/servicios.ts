import {Table, Column, Model, DataType, BelongsToMany, HasMany} from 'sequelize-typescript';
import Especialista from './especialista';
import EspecialistaServicio from './especiliastaServicio';
import Cita from './citas';



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

      @HasMany(() => Cita)
        citas!: Cita[];



}

