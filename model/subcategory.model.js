module.exports = (sequelize, Sequelize) => {
    const SubCategory = sequelize.define("sub_category", {
        category: {
            type: Sequelize.STRING
        },
        sub_category: {
            type: Sequelize.STRING
        }
    });
    return SubCategory;
};