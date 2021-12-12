const Sequelize = require('sequelize');
//테이블 User
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        id: {
            type: Sequelize.STRING(100),
            allowNull: false,
            primaryKey:true
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        department: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        rankType: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        userType: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    }

    //Sequelize.DATE -> mysql DATETIME
    static associate(db) {
        // db.User.hasMany(db.Review, { foreignKey: 'ref_no', sourceKey: 'id' }); -> hasMay -> sourceKey
        // db.User.belongsTo(db.Review, { foreignKey: 'ref_no', targetKey: 'id' }); belongsTo-> targetKey
    }   
};