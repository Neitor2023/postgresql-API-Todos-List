const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Subcategories = db.define('subcategories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    subcategory:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
},
{
    timestamps: false,
});

module.exports = Subcategories;