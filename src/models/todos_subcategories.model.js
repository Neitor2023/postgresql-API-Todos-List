const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todos_subcategories = db.define('todos_subcategories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    todosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'todos_id'
    },
    subcategoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'subcategories_id'
    },
},
{
    timestamps: false,
});

module.exports = Todos_subcategories;