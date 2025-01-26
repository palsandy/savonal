import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const karyawan = db.define('karyawan',{
    id_karyawan: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    jabatan: DataTypes.STRING
},
{
timestamps: false,
freezeTableName: true,
}

);


export default karyawan;

(async()=>{
    await db.sync();
})();