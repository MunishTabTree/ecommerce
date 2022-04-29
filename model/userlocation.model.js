module.exports = (sequelize, Sequelize) => {
    const UserLocation = sequelize.define("user_location", {
        userId: {
            type: Sequelize.NUMBER
        },
        locationName: {
            type: Sequelize.STRING
        },
        locationType: {
            type: Sequelize.STRING
        },
        street: {
            type: Sequelize.STRING
        },
        area: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        pincode: {
            type: Sequelize.STRING
        }
    });
    return UserLocation;
};