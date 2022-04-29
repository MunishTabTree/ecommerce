module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        emailId: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        profilePicPath: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        lastLogin: {
            type: Sequelize.STRING
        },
        createdDate: {
            type: Sequelize.STRING
        },
        modifiedDate: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return User;
};