const Sequelize = require('sequelize');
//테이블 restaurant
module.exports = class Restaurant extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey:true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            lat: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            lng: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            tel: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            startTime: {
                type: Sequelize.DATE, 
                allowNull: true,
            },
            endTime: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            parking: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Restaurant',
            tableName: 'restaurant',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Restaurant.hasMany(db.RestaurantFile, { foreignKey: 'refNo', sourceKey: 'id' });
        db.Restaurant.hasMany(db.RestaurantMenu, { foreignKey: 'refNo', sourceKey: 'id' });
    }   
};