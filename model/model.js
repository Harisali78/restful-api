const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Data', dataSchema)