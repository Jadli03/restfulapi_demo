const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
dotenv.config();



mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("connected to db"))
.catch( (err) => console.error(err.message));