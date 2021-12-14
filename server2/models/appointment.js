const Sequelize = require('sequelize');

module.exports = class Appointment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey:true
            },
            friendId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Appointment',
            tableName: 'appointment',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db){
        db.Appointment.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' }); 
    }   

};