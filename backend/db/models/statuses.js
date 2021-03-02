const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('statuses', {
        status_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        status_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'statuses',
        schema: 'dbo',
        timestamps: true,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        /*indexes: [
            {
                name: "",
                unique: true,
                fields: [
                    { name: "" },
                ]
            },
        ]*/
    });
};
