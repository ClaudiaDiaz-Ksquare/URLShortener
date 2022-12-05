import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from "sequelize";

export class UURL extends Model<InferAttributes<UURL>, InferCreationAttributes<UURL>> {

    declare id: string;
    declare ogUrl: string;

}

export const initUURLModel = (sequelize: Sequelize) => {
    UURL.init({
    
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        ogUrl: DataTypes.STRING
    
    }, {
        sequelize // Instance of sequelize that reflects the connection
    })
}