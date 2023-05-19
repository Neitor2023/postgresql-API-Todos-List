// importar los modelos
const Users = require("./users.model");
const Todos = require("./todos.models");
const Categories = require("./categories.model");
const Subcategories = require("./subcategories.model");
const Todos_Subcategories = require("./todos_subcategories.model");
const initModels = () => {
    Todos.belongsTo(Users, {foreignKey: 'userId'});
    Users.hasMany(Todos, {foreignKey: 'userId'});

    Todos.belongsTo(Categories, {foreignKey: 'categoryId'});
    Categories.hasMany(Todos, {foreignKey: 'categoryId'});

    // Subcategories.belongsTo(Categories, {foreignKey: 'subcategoryId'});
    // Categories.hasMany(Subcategories, {foreignKey: 'subcategoryId'});

    Todos_Subcategories.belongsTo(Todos, {foreignKey: 'todosId'});
    Todos.hasMany(Todos_Subcategories, {foreignKey: 'todosId'});

    // Subcategories.belongsTo(Todos_Subcategories, {foreignKey: 'subcategoryId'});
    // Todos_Subcategories.hasMany(Subcategories, {foreignKey: 'subcategoryId'});

    Todos_Subcategories.belongsTo(Subcategories, {foreignKey: 'subcategoriesId'});
    Subcategories.hasMany(Todos_Subcategories, {foreignKey: 'subcategoriesId'});

}

module.exports = initModels;