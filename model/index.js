const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    storage: 'db.sqlite',
    dialect: 'sqlite'
});


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model')(sequelize, Sequelize);
db.userlocation = require('./userlocation.model')(sequelize, Sequelize);
db.adminuser = require('./adminuser.model')(sequelize, Sequelize);
db.order = require('./order.model')(sequelize, Sequelize);
db.shoppingcart = require('./shoppingcart.model')(sequelize, Sequelize);
db.category = require('./category.model')(sequelize, Sequelize);
db.sub_category = require('./subcategory.model')(sequelize, Sequelize);
db.brand = require('./brand.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);


module.exports = db;