module.exports = (sequelize, Sequelize) => {
    const ShoppingCart = sequelize.define("shopping_cart", {
        userId: {
            type: Sequelize.NUMBER
        },
        productId: {
            type: Sequelize.NUMBER
        },
        quantity: {
            type: Sequelize.NUMBER
        },
        createdDate: {
            type: Sequelize.STRING
        },
        modifiedDate: {
            type: Sequelize.STRING
        }
    });
    return ShoppingCart;
};