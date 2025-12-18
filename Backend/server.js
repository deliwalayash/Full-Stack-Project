const express= require('express')
const app=express()
const PORT = 4000
const connectDB=require('./config/connectDB')
const userRoute=require('./route/userRoute')
const cors = require("cors")
app.use(cors())



app.use(express.urlencoded({extended:true}))

app.use(express.json())

connectDB()
app.use('/api',userRoute)

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log("PORT is listening to 4000")
})
