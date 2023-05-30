const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const initModels = require('./models/initModels');
const cors = require('cors');
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

app.use(userRouter);
app.use(todoRoutes);
app.use(categoriesRouter);
app.use(subcategoriesRouter);
app.use(todos_subcategoriesRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});