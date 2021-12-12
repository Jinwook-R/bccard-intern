const Sequelize = require('sequelize');
const User = require('./user');
const Restaurant = require('./restaurant');
const RestaurantFile = require('./restaurantFile');
const RestaurantMenu = require('./restaurantMenu');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Restaurant = Restaurant;
db.RestaurantFile = RestaurantFile;
db.RestaurantMenu = RestaurantMenu;

User.init(sequelize);
Restaurant.init(sequelize);
RestaurantFile.init(sequelize);
RestaurantMenu.init(sequelize);

User.associate(db);
Restaurant.associate(db);
RestaurantFile.associate(db);
RestaurantMenu.associate(db);

module.exports = db;