import express from 'express';  
const app =express();
const PORT = 3000;

//middleware
app.use(express.json());



//fakee database
let student = [
    {
        id:1, name:"guru",course:"MERN"
    },
     {
        id:2, name:"adam",course:"NODE"
    }
];

//get student by id
app.get('/student/:id',(req,res)=>{
    const student =student.find(s=>s.id==req.paramas.id);
    if(student){
        res.json(student);
    }
    else{
        res.status(404).json({message:"student not found"});
    }
})  

app.post('/student',(req,res)=>{
    const {name,course } = req.body;
    if(!name || !course){
        return res.status(400).json({message:"name and course are required"});
    }   
    const newStudent={
        id: student.length + 1,
        name,
        course
    };
    student.push(newStudent);
    res.status(201).json(newStudent);   
    })




//create a new student
app.post('/student',(req,res)=>{
    const {name,course } = req.body;
    if(!name || !course){
        return res.status(400).json({message:"name and course are required"});
    }
    const newStudent={
        id: student.length + 1,
        name,
        course
    };
    student.push(newStudent);
    res.status(201).json(newStudent);   
    })

    app.put('/student/:id',(req,res)=>{
        const student =student.find(s=>s.id==req.paramas.id);
        if(!student){
            return res.status(404).json({message:"student not found"});
        }
        const {name,course } = req.body;
        if(name) student.name = name;
        if(course) student.course = course;
        res.json(student);
    }) 

    
app.listen(PORT,()=>{   
        console.log('server running on http://localhost/3000');

});