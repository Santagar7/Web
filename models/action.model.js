const {DataTypes }  = require('sequelize');

module.exports = (sequelize)=>{

    return sequelize.define('action', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique:true
        },
        amount: {
            type: DataTypes.INTEGER
        },
        reason: {
            type: DataTypes.STRING
        },
        time:{
            type:DataTypes.DATE
        }
    }, {
        tableName: 'Action',
        timestamps: false
    });

}