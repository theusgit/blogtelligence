const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./article/ArticlesController");


app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log("Successful connection")
    }).catch((error) => {
        console.log(error);
    });

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(2020, () => {
    console.log("Yes")
})