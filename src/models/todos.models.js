const db = require('../utils/database')
const { DataTypes } = require('sequelize');

const Todos = db.define('todos',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    },
    title:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = Todos;