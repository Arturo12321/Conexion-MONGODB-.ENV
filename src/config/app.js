import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan('dev')); '--Para que aparezcan mensajes de metodos http en la consola'
export default app;
