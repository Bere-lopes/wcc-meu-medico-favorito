const {Sequelize, DataTypes} = require('sequilize');
const { database } = require("../db")
const Doctor = database.define('Doctor', {
    id:  {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    crm:  {
        type: DataTypes.STRING
    },
    specialty:  {
        type: DataTypes.STRING
    },
    clinic:  {
        type:  DataTypes.STRING
    },
    phone:  {
        type: DataTypes.STRING
    },
    favorite:  {
        type: DataTypes.BOLLEAN
    }    
});
Doctor.sync()

module.exports = Doctor;
    