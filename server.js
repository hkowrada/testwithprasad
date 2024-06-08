const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use("/reserve", require("./routes/reservation"));
app.use("/admin", require("./routes/admin"));

app.listen(5000, () => {
  console.log("Server running on port 5000!");
});
