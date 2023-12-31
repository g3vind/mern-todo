const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/ToDoRoutes");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGOOSE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGODB CONNECTED 🚀");
  })
  .catch((err) => {
    console.log(err);
  });

//   ROUTES
app.use("/api", routes);

app.listen(PORT, () => console.log(`server running at ${PORT}`));
