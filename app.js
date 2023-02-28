const  express = require("express")
const app =express()
const mongoose=require('mongoose')
mongoose.set("strictQuery", true);
const bodyParser    = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Import Routes
const booksRoutes=require('./routes/BooksRoutes')
app.use(booksRoutes)

app.get('/',function(req,res){
  res.send('Hello World')
})

const dbUri="mongodb+srv://jomobrain1:19BrainEmpire9149@cluster0.eew0u0n.mongodb.net/books"


mongoose.connect(dbUri)
.then(console.log("connected to db"))
.catch(err=>console.log(err))
app.listen(3000,function(){
    console.log('Listening to port 3000');
})

