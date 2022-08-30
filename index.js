require('dotenv').config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const libroRouter = require("./api/libros/libro.router");
const trackRouter = require("./api/tracks/track.router");

app.use(express.json());

app.use("/api/usuarios",userRouter);
app.use("/api/libros",libroRouter);
app.use("/api/tracks",trackRouter);
app.listen(process.env.APP_PORT,() => {
    console.log("Serivor corriendo", process.env.APP_PORT);
});