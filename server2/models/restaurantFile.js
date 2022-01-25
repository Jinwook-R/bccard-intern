const Sequelize = require('sequelize');

module.exports = class RestaurantFile extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            fileNo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey:true
            },
            fileName: { 
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            fullName: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            refNo: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            regDate: {
                type: Sequelize.DATE, 
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RestaurantFile',
            tableName: 'restaurant_file',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.RestaurantFile.belongsTo(db.Restaurant, { foreignKey: 'refNo', targetKey: 'id' }); 
    }   
};