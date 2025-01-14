const path = require('path');
const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");

const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));