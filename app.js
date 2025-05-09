import express from "express"
const app = express()
import employees from "./db/employees.js"
app.route("/").get((rec,res)=>{
    res.send("Hello employees!")
})

app.route("/employees").get((req,res)=>{
    res.send(employees)
})

app.route("/employees/random").get((req,res)=>{
    const randomIndex = Math.floor(Math.random() * employees.length)
    const randomEmployee = employees[randomIndex]
    console.log("Random employee:", randomEmployee); 
    res.send(randomEmployee)
})

app.route("/employees/:id").get((req,res)=>{
    const id = Number(req.params.id)
    const found = employees.find(emp => emp.id === id)
    if(found){
        res.send(found)
    }else{
        res.status(404).send("That employee does not exist!")
    }
})


export default app