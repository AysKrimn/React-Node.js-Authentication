const mongoose = require('mongoose')

const { Schema } = require('mongoose')


const UserSchema = new Schema({

    // MongoDB varsayılan olarak her veriye otomatik bir id atar
    name: String,
    password: String
    
})



const model = mongoose.model("Users", UserSchema)

// default export
module.exports = model