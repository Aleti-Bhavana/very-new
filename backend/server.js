require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const studentRoutes = require("./routes/students");
app.use("/api/students", studentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
