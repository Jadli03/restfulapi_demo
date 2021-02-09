const express = require("express");
const dotenv = require("dotenv");
require("./db/conn");
const usersRoute = require("./routes/users");

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(usersRoute);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`running at ${port}`));
