const express = require('express')
const app = express()
const cors = require('cors')
const msgModel = require('./model/msgSchema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://dbAdmin:Weneedsleep404!@localhost:27017/?authMechanism=DEFAULT&authSource=admin')
.then(()=>console.log("Connect DB Success"))
.catch(()=>console.log("Fucking Fail Connect"))

app.use(cors())
app.use(express.json())
app.post('/post',async(req,res)=>{
    const newMsg = await new msgModel({msg:req.body.msg})
    newMsg.save()
    res.json(newMsg)
})
app.get('/getall',async (req,res)=>{
    const allMsg = await msgModel.find()
    res.json(allMsg)
})

app.listen(process.env.PORT || 7000,() =>{
    console.log("Backend running")
})
