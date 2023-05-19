const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
},
{
    timestamps: false,
});

module.exports = Categories;