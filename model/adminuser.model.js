module.exports = (sequelize, Sequelize) => {
    const AdminUser = sequelize.define("admin_user", {
        username: {
            type: Sequelize.STRING
        },
        emailId: {
            type: Sequelize.STRING
        },
        mobile: {
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
    return AdminUser;
};