const mongoose = require('mongoose')


const UserModule =mongoose.Schema({
    email: {type:String , required:true, unique:true},
    password :{type:String , required:true},
    name:{type:String},
    phone:{type:String},
    // Favorites : {type:[] , default:[]},
    // History : {type:[] , default:[]},
    // token :{type: String}
})

module.exports= mongoose.model('User' , UserModule)