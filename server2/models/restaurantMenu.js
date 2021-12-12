const Sequelize = require('sequelize');
//테이블 menuList
module.exports = class RestaurantMenu extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey:true
            },
            refNo: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            menuName: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RestaurantMenu',
            tableName: 'restaurant_menu',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.RestaurantMenu.belongsTo(db.Restaurant, { foreignKey: 'refNo', targetKey: 'id' }); 
    }   
};