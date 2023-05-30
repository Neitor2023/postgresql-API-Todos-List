const Users = require('../models/users.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    // validar la información
    const { username, email, password } = req.body;
    // asegurarse de que no venga vacio
    if (typeof username !== 'string' || !username) {
      return res.status(400).json({
        error: 'invalid username',
        message: 'Username canot be null or diferent to string'
      });
    }
    if (typeof email !== 'string' || !email) {
      return res.status(400).json({
        error: 'invalid email',
        message: 'email canot be null or diferent to string'
      });
    }
    if (typeof password !== 'string' || !password) {
      return res.status(400).json({
        error: 'invalid password',
        message: 'password canot be null or diferent to string'
      });
    }
    // hasheamos la contraseña
    const hashed = await bcrypt.hash(password, 10);
    console.log("bandera 1")
    await Users.create({ firstname, lastname, username, email, password: hashed })
    res.status(201).send();
    // asegurarse de que se cumpla con el tipo de dato
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
      const { id } = req.params;    
      const { firstname, lastname, username, email } = req.body;
      await Users.update({firstname, lastname, username, email},{
          where:{ id }
      });
      res.status(204).send()
  } catch (error) {
      res.status(400).json(error)
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id },
    });
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { Id } = req.params;
    const users = await Users.findByPk(Id, {
    });
    res.json(users);
  } catch (error) {
    res.status(400).json(error)
  }
};

const getUserAll = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: {
        exclude: ['password'],
      }
    });
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  getUserAll,
  getUserById,
  deleteUser,
}