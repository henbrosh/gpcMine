const express = require("express");
const path = require("path");
const http = require("http")
const dbConnect = require("./db/mongoConnect")
const cors = require("cors")
const app = express();

app.use(cors({
    origin: "*",
}));

const port = "3000";
const { rouesInit } = require("./routes/confing_route")
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


rouesInit(app);

const server = http.createServer(app);

server.listen(port);

