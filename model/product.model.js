module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        product_name: {
            type: Sequelize.STRING
        },
        product_description: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        sub_category: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.STRING
        },
        product_image_path: {
            type: Sequelize.STRING
        }
    });
    return Product;
};