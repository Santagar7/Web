const {DataTypes }  = require('sequelize');

module.exports = (sequelize)=>{

    return sequelize.define('budget', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique:true
        },
        name: {
            type: DataTypes.STRING
        },
        index: {
            type: DataTypes.STRING,
            unique:true
        },
        money: {
            type: DataTypes.INTEGER
        },
    }, {
        tableName: 'Budget',
        timestamps: false
    });

}