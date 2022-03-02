const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const connectDB = require("./config/db");

const todo = require("./routes/todo");

connectDB();

app.use(cors({ origin: true, credentials: true })); 

app.use("/api/todo", todo);
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});