import express from 'express';  
const app =express();
const PORT = 3000;

//middleware
app.use(express.json());



//fakee database
let studrnt = [
    {
        id:1, name:"adityay",course:"MERN"
    },
     {
        id:2, name:"adii",course:"NODE"
    }
];

//get all student 
app.get('/student/:id',(req,res)=>{
    const student =student.find(s=>s.id==req.paramas.id);
    if(student){
        res.json(student);
    }
    else{
        res.status(404).json({message:"student not found"});
    }
})  
//get student by id
app.get('/student/:id',(req,res)=>{
    const student =student.find(s=>s.id==req.paramas.id);   
})



//create a new student
app.post('/student',(req,res)=>{
    const newStudent = req.body;
    student.push(newStudent);
    res.status(201).json(newStudent);
})