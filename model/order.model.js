module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        userId: {
            type: Sequelize.NUMBER
        },
        productId: {
            type: Sequelize.NUMBER
        },
        quantity: {
            type: Sequelize.NUMBER
        },
        amount: {
            type: Sequelize.NUMBER
        },
        paymentMethod: {
            type: Sequelize.STRING
        },
        deliveryLocationID: {
            type: Sequelize.NUMBER
        },
        deliveryExpectedDate: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        createdDate: {
            type: Sequelize.STRING
        },
        modifiedDate: {
            type: Sequelize.STRING
        }
    });
    return Order;
};