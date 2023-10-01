import express from "express";
import cors from "cors";
import blogRoutes from "./routes/routes.js";
import db from './database/db_noSql.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/blogs", blogRoutes);

app.get('/', (req, res) => {
    res.send("Funcionamiento OK");
})

app.listen(8000, () => {
    console.log("Server UP running in http://localhost:8000/");
})