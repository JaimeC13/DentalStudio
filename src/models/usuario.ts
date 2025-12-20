import {Table, Column, Model, DataType, Unique, AllowNull } from 'sequelize-typescript';



@Table({
    tableName: 'usuario',
})

export default class usuario extends Model {

    @Unique(true)
    @AllowNull(false)
    @Column({
        type: DataType.STRING(6)
    })
     declare code: string;

     @AllowNull(false)
     @Column({
        type: DataType.STRING(60)
     })
    declare password: string


}