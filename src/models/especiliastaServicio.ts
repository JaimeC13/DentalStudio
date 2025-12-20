import {Table, Column, Model, DataType, ForeignKey,} from 'sequelize-typescript';
import Servicio from './servicios';
import Especialista from './especialista';

@Table({
    tableName: 'especialistaServicio',
})

export default class EspecialistaServicio extends Model {

    @ForeignKey(() => Especialista)
    @Column({
        type: DataType.INTEGER, 
    })
    especialistaId!: number;
    

    @ForeignKey(()=> Servicio )
    @Column({
        type: DataType.INTEGER,

    })
    servicioId!: number;


}

