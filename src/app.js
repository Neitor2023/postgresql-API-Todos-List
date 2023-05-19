const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const initModels = require('./models/initModels');
const cors = require('cors');
const Users = require("./models/users.model");
const Subcategories = require("./models/subcategories.model");
const Categories = require("./models/categories.model");
const Todos = require("./models/todos.models");
const Todos_subcategories = require("./models/todos_subcategories.model");

const todoRoutes = require("./routes/todos.routes");
const userRouter = require("./routes/users.routes");
const categoriesRouter = require("./routes/categories.routes");
const subcategoriesRouter = require("./routes/subcategories.routes");
const todos_subcategoriesRouter = require("./routes/todos_subcategories.routes");

initModels();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
db.authenticate() // es uan funcion asincrona
    .then(()=> console.log('Base de dato conectada'))
    .catch((err) => console.log(err));

// ? Si no existe la tabla la crea
// * alter: true -> compara tablas y columnas y si encuentra diferencias las modifica
// ! force: true -> borra la información y todas las tablas y las crea de nuevo
db.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("Servidor Trabajando OK");
});

// app.post('/users', async (req,res) => {
//     try {
//         const newUser = req.body;
//         await Users.create(newUser);
//         res.status(201).send();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

// app.post('/subcategories', async (req,res) => {
//     try {
//         const newSubcategories = req.body;
//         await Subcategories.create(newSubcategories);
//         res.status(201).send();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

// app.post('/categories', async (req,res) => {
//     try {
//         const newCategories = req.body;
//         await Categories.create(newCategories);
//         res.status(201).send();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

// app.post('/todos', async (req,res) => {
//     try {
//         const newTodos = req.body;
//         await Todos.create(newTodos);
//         res.status(201).send();
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });


// obtener una publicacion con su categoria y el usuario que la creo
// obtener las respuestas de la publicacion
app.get('/todos/userId/:userId', async (req,res) => {
    try {
        const {userId} = req.params;
        const todos = await Todos.findAll({
            where:{userId},
            attributes: {
                exclude: ['userId', 'categoryId'],
            },
            include: [
                {
                    model: Users,
                    attributes: ['id', 'username'],
                },
                {
                    model: Categories,
                    attributes: ['id', 'category'],
                },
                {
                    model: Todos_subcategories,
                    attributes: ['id','todosId', 'subcategoriesId'],
                    include: 
                        {
                            model: Subcategories,
                            attributes: ['id', 'subcategory'],
                        },
                },
            ],
        });
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.put("/todos/:id", async (req,res)=> {
    try {
        const { id } = req.params;    
        const { completed } = req.body;
        await Todos.update({completed},{
            where:{id} // {title: title} completed
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});

app.delete('/todos/:id', async (req,res)=>{
    try {
        const { id } = req.params;    
        await Todos.destroy({
            where:{id} // {title: title} completed
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});
app.use(userRouter);
app.use(todoRoutes);
app.use(categoriesRouter);
app.use(subcategoriesRouter);
app.use(todos_subcategoriesRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});