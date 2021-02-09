const mongoose = require("mongoose");
const validator = require("validator");

const userSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
    },
    email:{
        type: String,
        require: true,
        unique: [true, "email already is present"],
        validate(val){
            if(!validator.isEmail(val))
            {
                throw new Error("not valid email");
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlenght: 10,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("User",userSchema);

