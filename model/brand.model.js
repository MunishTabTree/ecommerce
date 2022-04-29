module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
        brand: {
            type: Sequelize.STRING
        }
    });
    return Brand;
};