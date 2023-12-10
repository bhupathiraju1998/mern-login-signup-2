const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/employee')
.then((res) => console.log("db running"))
.catch((res) => console.log("err",res))

app.post('/register',(req,res) => {
    const {name,email,password} = req.body
    

    
        EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    
})

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.listen(3001,()=>{
    console.log("server running")
})