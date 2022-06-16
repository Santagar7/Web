const {DataTypes }  = require('sequelize');

module.exports = (sequelize)=>{

    return sequelize.define('members', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique:true
        },
    }, {
        tableName: 'Members',
        timestamps: false
    });
}