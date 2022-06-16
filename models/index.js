const {Sequelize} = require('sequelize')

let configData = {
    dialect:'postgres',
    host:'localhost',
    port:5432,
    database:'budget',
    username:'postgres',
    password:'1234'
}

const sequelize = new Sequelize(configData);

const  Budget = require('./budget.model')(sequelize);
const  User = require('./user.model')(sequelize);
const  Action = require('./action.model')(sequelize);
const  Member = require('./member.model')(sequelize);
Budget.belongsTo(User, { foreignKey: 'owner_id', onDelete: 'cascade' });
Action.belongsTo(User, { foreignKey: 'creator_id', onDelete: 'cascade' });
Action.belongsTo(Budget, { foreignKey: 'budget_id', onDelete: 'cascade' });

Member.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' });
Member.belongsTo(Budget, { foreignKey: 'budget_id', onDelete: 'cascade' });

module.exports = {
    sequelize,
    Budget,
    User,
    Action,
    Member
}