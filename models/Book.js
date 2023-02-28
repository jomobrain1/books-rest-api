const mongoose=require('mongoose')

const BookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Book',BookSchema)