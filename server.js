const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser")


const app = express();
const connectDB = require("./server/config/db");

const todo = require("./server/routes/todo");

connectDB();

app.use(cors({ origin: true, credentials: true })); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todo", todo);
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});